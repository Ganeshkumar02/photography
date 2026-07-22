
import Carousel from "react-bootstrap/Carousel";

const slides = [
  {
    title: "Your Love Story",
    subtitle: "Captured Forever",
    image: "/sliderimage/s4.jpg",
  },
];

function Hero() {
  return (
    <section className="py-4 sm:py-6">
      <Carousel
        controls={false}
        indicators={false}
        interval={null}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="relative">

              {/* Image Wrapper */}
              <div className="relative flex justify-center">

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="
                    w-[95%]
                    sm:w-[92%]
                    md:w-[88%]
                    lg:w-[83%]
                    h-[55vh]
                    sm:h-[65vh]
                    md:h-[70vh]
                    lg:h-[80vh]
                    xl:h-[85vh]
                    object-cover
                    rounded-2xl
                    lg:rounded-[30px]
                    shadow-2xl
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex justify-center">
                  <div
                    className="
                      w-[95%]
                      sm:w-[92%]
                      md:w-[88%]
                      lg:w-[83%]
                      h-full
                      bg-black/45
                      rounded-2xl
                      lg:rounded-[30px]
                    "
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
                  <div className="max-w-4xl">

                    <span
                      className="
                        uppercase
                        tracking-[3px]
                        sm:tracking-[6px]
                        text-white/80
                        text-[10px]
                        sm:text-xs
                        md:text-sm
                      "
                    >
                      Wedding Photography & Films
                    </span>

                    <h1
                      className="
                        mt-4
                        text-white
                        text-3xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        xl:text-8xl
                        font-light
                        leading-tight
                      "
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="
                        mt-4
                        text-gray-200
                        text-sm
                        sm:text-base
                        md:text-lg
                        lg:text-xl
                        max-w-2xl
                        mx-auto
                      "
                    >
                      {slide.subtitle}
                    </p>

                    <div
                      className="
                        mt-8
                        flex
                        flex-col
                        sm:flex-row
                        justify-center
                        items-center
                        gap-4
                      "
                    >
                      <a
                        href="/portfolio"
                        className="
                          px-7
                          sm:px-8
                          py-3
                          bg-white
                          text-black
                          rounded-full
                          font-medium
                          no-underline
                          hover:scale-105
                          transition-all
                          duration-300
                        "
                      >
                        View Portfolio
                      </a>

                      <a
                        href="/book"
                        className="
                          px-7
                          sm:px-8
                          py-3
                          border
                          border-white
                          text-white
                          rounded-full
                          no-underline
                          hover:bg-white
                          hover:text-black
                          transition-all
                          duration-300
                        "
                      >
                        Book Now
                      </a>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Hero;

