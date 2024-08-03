import { DogBg, Butterfly } from "../../public/assets/images";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { testimonialData } from "@/Data/homeData";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="Testimonial overflow-hidden h-[80vh] relative ">
      <div className="container flex h-[100%]">
        <div className="Testimonial-img w-60">
          <div className="Testimonial--img-DogBg mt-[5rem]">
            <div className="relative h-[100px]">
              <Image
                src={Butterfly}
                alt="Butterfly"
                className="absolute right-[30px]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
              />
            </div>

            <Image
              src={DogBg}
              alt="Dog Image"
              className="w-[56%] absolute left-0 top-0"
            />
          </div>
        </div>

        <div className="w-40 flex items-center">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {testimonialData.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="w-[480px] h-[335px]">
                  <FaQuoteRight color="#ed6436" size={80} />

                  <p className="py-[20px] text-[25.6px] font-extrabold leading-[41px]">
                    {t.testimonial}
                  </p>

                  <h3 className="text-mainFC text-md uppercase font-semibold">
                    {t.name}
                  </h3>
                  <span className="font-bold text-base">{t.subName}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
