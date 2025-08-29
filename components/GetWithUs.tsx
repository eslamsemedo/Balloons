import React from 'react'

const features = [
  {
    num: 1,
    title: "Expert travel advice",
    text:
      "A reputable travel agency should have experienced and knowledgeable staff who can provide expert advice on destinations, activities, accommodation, and transportation.",
  },
  {
    num: 2,
    title: "Competitive pricing",
    text:
      "A reputable travel agency will negotiate with travel suppliers on your behalf to get you the best possible prices.",
  },
  {
    num: 3,
    title: "Customized itineraries:",
    text:
      "A good travel agency will work with you to create a personalized itinerary that suits your preferences, budget, and schedule.",
  },
];
const GetWithUs = () => {
  return (
    <section id="guides" className="padd">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          What you will get with us
        </h2>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 md:mt-16 md:grid-cols-2 lg:gap-20">
          {/* Left: Feature list */}
          <div className="order-2 space-y-10 md:order-1">
            {features.map((f) => (
              <div key={f.num} className="max-w-xl">
                <div className="mb-3 inline-flex items-center rounded-full bg-[#9B6B5A] px-3 py-1 text-white">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-[#9B6B5A]">
                    {f.num}
                  </span>
                </div>

                <h3 className="text-xl font-semibold md:text-2xl">{f.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600">
                  {f.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Overlapping images */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto h-[420px] w-full max-w-xl md:h-[500px]">
              {/* Large image (top-right) */}
              <div className="absolute right-0 top-6 h-[240px] w-[88%] rounded-3xl shadow-sm md:h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                  alt="Hot air balloons over Cappadocia"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>

              {/* Small image (bottom-left, overlapping) */}
              <div className="absolute bottom-0 left-6 h-[240px] w-[85%] rounded-3xl border-8 border-white shadow-lg ring-1 ring-black/5 md:h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
                  alt="Cappadocia landscape with balloons"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetWithUs


