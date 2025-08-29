import React from 'react'

const OurBlog = () => {
  type BlogCard = {
    id: string;
    title: string;
    image: string;
    href?: string;
  };

  const BLOGS: BlogCard[] = [
    {
      id: "eat",
      title: "5 Place To Eat In Cappadocia",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "hotels",
      title: "Best Hotels In Cappadocia",
      image:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "new-env",
      title: "New Environment In Cappadocia",
      image:
        "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div id="contacts">
      <section className="px-4 py-20 md:py-24 flex flex-col gap-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center p-6 gap-12 md:grid-cols-2">
          {/* Left: Heading + Button */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Our blog about <br /> Cappadocia
            </h2>

            {/* <button className="inline-flex items-center rounded-xl bg-[#9B6B5A] px-6 py-3 text-white font-medium shadow-sm transition hover:bg-[#865746]">
              Read More
            </button> */}
          </div>

          {/* Right: Description */}
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
            Cappadocia is a stunning region in central Turkey known for its unique
            rock formations, underground cities, and hot air balloons. The
            landscape is filled with fairy chimneys, caves, and historical sites
            that showcase the rich cultural heritage of Turkey.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm"
            >
              {/* Image */}
              <a href={post.href ?? "#"} className="block">
                <div className="relative h-64 w-full md:h-[400px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full rounded-t-3xl object-cover"
                  />
                </div>
              </a>

              {/* Body */}
              <div className="flex flex-col gap-6 rounded-b-3xl p-6">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {post.title}
                </h3>

                <div className="flex items-center justify-end">
                  <a
                    href={post.href ?? "#"}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurBlog
