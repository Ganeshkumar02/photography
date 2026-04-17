import Carousel from "react-bootstrap/Carousel";

const slides = [
  {
    title: "Your Love Story",
    subtitle: "Captured Forever",
    image: "/sliderimage/G1.jpg",
  },
  {
    title: "Cinematic Weddings",
    subtitle: "Films & Photography",
    image: "/sliderimage/G2.jpg",
  },
  {
    title: "Real Emotions",
    subtitle: "Pure Memories",
    image: "/sliderimage/G4.jpg",
  },
];

function Hero() {
  return (
    <Carousel fade interval={5000} pause={false} controls indicators>

      {slides.map((slide, index) => (
        <Carousel.Item key={index}>

          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[70vh] sm:h-[80vh] md:h-screen object-cover"
          />

          {/* Gradient */}
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Caption */}
          <Carousel.Caption className="!bottom-10 md:!bottom-20">

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light">
              {slide.title}
            </h1>

            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200">
              {slide.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="/portfolio"
                className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                View Portfolio
              </a>

              <a
                href="/book"
                className="px-6 py-2 bg-amber-500 rounded-full text-sm hover:bg-amber-600 transition"
              >
                Book Now
              </a>
            </div>

          </Carousel.Caption>

        </Carousel.Item>
      ))}

    </Carousel>
  );
}

export default Hero;