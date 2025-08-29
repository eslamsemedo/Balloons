This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form Setup

This project includes a contact form that sends emails via Gmail. To set it up:

1. **Create a `.env.local` file** in the root directory
2. **Copy the contents** from `env.example` to `.env.local`
3. **Configure Gmail credentials:**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password (not your regular password)
   - Use the App Password in the `GMAIL_PASS` variable
4. **Set the recipient email** in `EMAIL_TO` where you want to receive contact form submissions

### Environment Variables Required:

- `GMAIL_USER`: Your Gmail address
- `GMAIL_PASS`: Your Gmail App Password
- `EMAIL_TO`: Email address to receive contact form submissions

### Features:

- ✅ Form validation with real-time feedback
- ✅ Email notifications with HTML formatting
- ✅ Error handling and user feedback
- ✅ Loading states and success messages
- ✅ TypeScript support for better development experience
