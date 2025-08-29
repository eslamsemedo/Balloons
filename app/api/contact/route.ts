import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// TypeScript types for the request body
interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  date?: string;
}

// Validation function
function validateFormData(data: any): data is ContactFormData {
  return (
    typeof data.name === 'string' && data.name.trim().length > 0 &&
    typeof data.surname === 'string' && data.surname.trim().length > 0 &&
    typeof data.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.phone === 'string' && data.phone.trim().length > 0
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request body
    if (!validateFormData(body)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data. Please check all required fields.'
        },
        { status: 400 }
      );
    }

    const { name, surname, email, phone, date } = body;

    // Check if required environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing required environment variables for email configuration');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service configuration error'
        },
        { status: 500 }
      );
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // Add timeout and other options for better reliability
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify transporter configuration
    await transporter.verify();

    const fullName = `${name} ${surname}`.trim();

    const mailOptions = {
      from: `"${fullName}" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Trip Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9E6F60; border-bottom: 2px solid #9E6F60; padding-bottom: 10px;">
            New Trip Inquiry
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">
              ${fullName} is interested in planning a trip with your services.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This inquiry was submitted from your website contact form.</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Trip Inquiry from ${fullName}

Contact Information:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
${date ? `- Preferred Date: ${date}` : ''}

Message:
${fullName} is interested in planning a trip with your services.

Submitted at: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been sent successfully!'
    });

  } catch (error) {
    console.error('Contact form submission error:', error);

    // Provide more specific error messages
    // if (error.code === 'EAUTH') {
    //   return NextResponse.json(
    //     { 
    //       success: false, 
    //       error: 'Email authentication failed. Please contact support.' 
    //     }, 
    //     { status: 500 }
    //   );
    // }

    // if (error.code === 'ECONNECTION') {
    //   return NextResponse.json(
    //     { 
    //       success: false, 
    //       error: 'Unable to connect to email service. Please try again later.' 
    //     }, 
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}
