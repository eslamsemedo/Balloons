"use client"
import React from 'react'

const form = () => {
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
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
                />

                {/* Date + Send row */}
                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <div className="flex items-center w-full sm:max-w-xs h-14 rounded-xl border border-gray-200 bg-white px-4 text-gray-800">
                    <input
                      type="text"
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
                    className="inline-flex h-14 items-center justify-center rounded-xl px-10 font-medium text-white bg-[#9E6F60] hover:opacity-95 transition sm:min-w-[200px]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default form
