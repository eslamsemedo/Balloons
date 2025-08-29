"use client"
import React, { useState } from 'react'

const form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    if (!formData.surname.trim()) {
      setErrorMessage('Surname is required');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', surname: '', email: '', phone: '', date: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-14">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            {/* LEFT: Image */}
            <div className="relative">
              <img
                src={"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"}
                alt={"Cappadocia"}
                className="w-full h-[520px] object-cover rounded-2xl shadow-sm"
              />
            </div>

            {/* RIGHT: Heading + Form */}
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight text-black leading-tight mb-8">
                Let Us Plan Your Dream Trip - Just Fill
                <br /> Out The Form
              </h2>

              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#9E6F60]/50 focus:border-[#9E6F60]"
                />
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  placeholder="Surname"
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#9E6F60]/50 focus:border-[#9E6F60]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#9E6F60]/50 focus:border-[#9E6F60]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#9E6F60]/50 focus:border-[#9E6F60]"
                />

                {/* Date + Send row */}
                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <div className="flex items-center w-full sm:max-w-xs h-14 rounded-xl border border-gray-200 bg-white px-4 text-gray-800">
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      placeholder="21.04.23"
                      className="w-full bg-transparent outline-none placeholder-gray-400"
                      aria-label="Date"
                    />
                    {/* calendar icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 shrink-0 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-14 items-center justify-center rounded-xl px-10 font-medium text-white bg-[#9E6F60] hover:opacity-95 transition sm:min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you! Your inquiry has been sent successfully. We'll get back to you soon.
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Submission failed</p>
                        <p className="text-sm mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default form
