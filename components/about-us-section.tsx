import Image from "next/image"

export default function AboutUsSection() {
  return (
    <section id="about" className="padd">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/img/img1.png"
            alt="Hot air balloons floating over Cappadocia landscape at sunset"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-[500px]"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">About Us</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Our tour agency offers unique and exciting travel experiences for individuals and groups. With a focus on
              adventure, culture, and sustainable tourism, we strive to create unforgettable memories for our clients.
            </p>

            <p className="text-lg">
              Our team of knowledgeable guides and friendly staff are dedicated to providing excellent service and
              ensuring a safe and enjoyable trip for all. From exploring exotic destinations to trying new activities
              and cuisines, we specialize in customized itineraries that cater to diverse interests and budgets. Join us
              for a memorable journey that will broaden your horizons and leave you feeling inspired.
            </p>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('our-tours');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-main hover:bg-main/80 text-white px-8 py-3 rounded-2xl text-lg font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-main/50"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}
