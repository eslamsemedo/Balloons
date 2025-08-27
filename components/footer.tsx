import React from "react";

const FooterHotair: React.FC = () => {
  return (
    <footer className="w-full bg-[#9E6F60] text-[#F5EDE8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-12">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
          {/* Brand + blurb */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-6">
              {/* Logo placeholder (use your image src) */}
              <img
                src="https://placehold.co/100x100"
                alt="Hotair Balloons Luxor"
                className="w-20 h-20 object-contain"
              />
              <div className="border-l border-white/20 pl-6">
                <div className="flex items-center gap-3">
                  {/* small balloon icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white/90"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 3.72 3.13 6.48 5.45 9.38.31.39.92.39 1.23 0C15.87 15.48 19 12.72 19 9a7 7 0 0 0-7-7zm0 20a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Hotair Adventures</h3>
                </div>

                <p className="mt-4 text-white/80 leading-relaxed">
                  Cappadocia Adventures Tour Agency is a leading tour operator
                  in the Cappadocia region of Turkey. With years of experience,
                  we specialize in organizing customized tours and excursions
                  for individuals, families, and groups.
                </p>

                {/* Socials */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-white/90">Follow Us</span>
                  <span className="h-5 w-px bg-white/30" />
                  {/* X / Twitter */}
                  <a href="#" aria-label="Twitter" className="transition-opacity hover:opacity-90">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M20.7 3.3h-2.3L13 10.1 8.5 3.3H2l7.3 10.6L2.3 20.7H4.6l5.9-7.2 4.8 7.2H22l-7.8-11.3L20.7 3.3z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-90">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-90">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="#" aria-label="WhatsApp" className="transition-opacity hover:opacity-90">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M20 4.9A10 10 0 0 0 3.3 18.6L2 22l3.5-1.2A10 10 0 1 0 20 4.9zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3A8 8 0 1 1 12 20zm4.4-5.7c-.2-.1-1.3-.7-1.5-.8s-.3-.1-.5.1-.6.8-.7.9-.3.1-.5 0A6.5 6.5 0 0 1 10 12c-.1-.2 0-.3 0-.5s.1-.3.1-.4 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.3-.6-.3h-.5a1 1 0 0 0-.8.4A2.6 2.6 0 0 0 6 10.1a4.6 4.6 0 0 0 .9 2.4 10.6 10.6 0 0 0 4 3.8c.4.2.8.4 1.1.5a2.6 2.6 0 0 0 1.2.1 2.1 2.1 0 0 0 1.4-.9 1.7 1.7 0 0 0 .1-1.1c-.1-.2-.2-.2-.4-.3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/90">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Tours</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Contacts</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-white/90">
              <li><a href="#" className="hover:underline">Help &amp; Support</a></li>
              <li><a href="#" className="hover:underline">Term &amp; Condition</a></li>
              <li><a href="#" className="hover:underline">24/7H Services</a></li>
            </ul>
          </div>

          {/* Communication */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Communication</h4>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/40">
                  {/* phone icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 8.8 19.8 19.8 0 0 1 .09 0.18 2 2 0 0 1 2.06 0H5a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.78 2 2 0 0 1-.45 2.11L6.2 8.2a16 16 0 0 0 9.6 9.6l1.6-1.05a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.78.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="text-white/70">Drop a line</div>
                  <div className="font-medium">+123 456 789</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/40">
                  {/* mail icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <div className="text-white/70">Email Address</div>
                  <a href="#" className="font-medium hover:underline">
                    www.hotairballoonsluxor.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/40">
                  {/* pin icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s7-4.35 7-11a7 7 0 0 0-14 0c0 6.65 7 11 7 11z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </span>
                <div>
                  <div className="text-white/70">Visit Office</div>
                  <div className="font-medium">
                    Hakim Muzaffer Arer Sk., 50650
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* divider + copyright */}
        <hr className="mt-10 border-white/30" />
        <p className="text-center text-white/80 text-sm py-4">
          hotair Adventures ©Copyright 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterHotair;