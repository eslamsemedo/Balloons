import React from 'react'

const ExploreMore = () => {
  return (
    <div id="explore">
      <section className="padd">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Explore one of the most <br /> beautiful place in the world
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              We would be delighted to share our gallery of stunning photos from
              Cappadocia with you! Our collection includes a range of images that
              showcase the natural beauty, cultural heritage, and unique
              attractions of this magical region.
            </p>

            <button
              onClick={() => {
                const element = document.getElementById('gallery');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-lg bg-[#9B6B5A] px-6 py-3 text-white font-medium hover:bg-[#865746] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9B6B5A]/50"
            >
              Open Gallery
            </button>
          </div>

          {/* Right side (kept empty for spacing / optional image) */}
          <div />
        </div>
      </section>
    </div>
  )
}

export default ExploreMore
