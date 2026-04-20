import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { slides } from '../../data/slideData';

const Home = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={200}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        className="h-[500px] md:h-[650px] lg:h-[700px] group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/65" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 max-w-2xl font-light opacity-90">
                {slide.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-primary border-2 border-primary hover:bg-accent hover:border-accent text-white px-9 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl">
                  Apply Now
                </button>
                <button className="bg-white/10 hover:bg-white text-white hover:text-primary px-9 py-3.5 rounded-full font-semibold border border-white/30 transition-all duration-300 backdrop-blur-md">
                  View Programs
                </button>
              </div>
            </div>
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white/70 hover:text-white transition-colors">
              <FaChevronCircleLeft size={32} />
            </div>
            <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white/70 hover:text-white transition-colors">
              <FaCircleChevronRight size={32} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
