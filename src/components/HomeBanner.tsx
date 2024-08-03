import Image from "next/image";
import { BannerImg, BannerBtn } from "../../public/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { minSwiper } from "../Data/homeData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Link from "next/link";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "animate.css";

function HomeBanner() {
  return (
    <>
      <section className="banner container w-full flex animate__animated animate__fadeIn">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="w-[45%] flex items-center"
        >
          <div className="flex flex-col w-full">
            <h1 className="text-[86px] font-extrabold leading-tight">
              <span className="text-[#ed6436] text-[86px] text-7xl">
                Enjoy Your
              </span>
              &nbsp; Holiday
            </h1>
            <Swiper
              className="w-full"
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              freeMode={true}
              modules={[EffectFade, Pagination, Autoplay]}
            >
              {minSwiper.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center">
                    <Image
                      className="border-gray-700 border-r pr-4"
                      src={slide.image.src}
                      alt={slide.title}
                      width={100}
                      height={100}
                    />
                    <div className="pl-5">
                      {" "}
                      <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                      <p className="pr-[80px]">{slide.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Link className="banner_btn" href="#">
              <Image src={BannerBtn} alt="" />
            </Link>
          </div>
        </div>
        <div className="w-[55%]">
          <span className="w-[100%] absolute">
            <Image className="right-0 w-[54%]" src={BannerImg} alt="" />
          </span>
        </div>
      </section>
    </>
  );
}
export default HomeBanner;
