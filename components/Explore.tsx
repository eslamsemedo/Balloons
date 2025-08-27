import React from 'react'

const Explore = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center padd">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s see Cappadocia with <br /> us and with you
          </h2>

          <button className="bg-[#9B6B5A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#865746] transition">
            Explore
          </button>
        </div>

        {/* Right Side */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Marvel at the surreal landscape of bizarre rock formations and stunning valleys as you traverse through this magical land.
          </p>
          <p>
            Whether you prefer hot air ballooning, horseback riding, or hiking, Cappadocia has something for everyone. Join us and experience the unique charm of Turkey&apos;s beautiful Cappadocia.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Explore
