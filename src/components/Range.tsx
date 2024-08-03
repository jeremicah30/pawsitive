import Image from "next/image";
import { DogYellow, DownArrow, UpArrow } from "../../public/assets/images";
import { useState } from "react";

const Range = () => {
  const [value, setValue] = useState<number>(0);
  const [arrowImage1, setArrowImage1] = useState(DownArrow);
  const [arrowImage2, setArrowImage2] = useState(DownArrow);

  const rangeSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dollarValue = parseInt(event.target.value) * 1;
    setValue(dollarValue);
  };

  const toggleArrow1 = () => {
    if (arrowImage1 === DownArrow) {
      setArrowImage1(UpArrow);
    } else {
      setArrowImage1(DownArrow);
    }
  };

  const toggleArrow2 = () => {
    if (arrowImage2 === DownArrow) {
      setArrowImage2(UpArrow);
    } else {
      setArrowImage2(DownArrow);
    }
  };

  return (
    <div className="rangeMain overflow-hidden h-[80vh] relative ">
      <div className="container flex h-[100%]">
        <div className="Range-img w-60">
          <div className="Range--img-DogBg mt-[-1rem]">
            <Image
              src={DogYellow}
              alt="Dog Image"
              className="w-[56%] absolute left-0 top-0"
            />
          </div>
        </div>

        <div className="w-40 flex items-start">
          <div className="max-w-[477px] p-[4rem] bg-cardBG rounded-[50px] shadow dark:bg-gray-800 dark:border-gray-700">
            <span className="text-mainFC font-bold uppercase">
              PLANNING A VACATION?
            </span>

            <h2 className="mt-6 text-[47.2px] leading-[56.64px] font-extrabold tracking-tight text-gray-900 dark:text-white">
              Get a quote for pet boarding
            </h2>

            <div className="flex flex-col mt-5 mb-4">
              <label
                htmlFor="petType"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                YOUR PET
              </label>
              <select
                id="petType"
                className="bg-gray-50 rounded-full border border-black text-gray-900 text-md text-gray-400 focus:ring-cardBG focus:border-mainFC block w-full px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={toggleArrow1}
                style={{ backgroundImage: `url(${arrowImage1.src})` }}
              >
                <option selected>Select...</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
              </select>

              <label
                htmlFor="serviceType"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                SERVICE
              </label>
              <select
                id="serviceType"
                className="bg-gray-50 rounded-full border border-black text-gray-900 text-md text-gray-400 focus:ring-cardBG focus:border-mainFC block w-full px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={toggleArrow2}
                style={{ backgroundImage: `url(${arrowImage2.src})` }}
              >
                <option selected>Select...</option>
                <option value="cat">Bath</option>
                <option value="dog">Grooming</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="range">Number of Days</label>

              <input
                className="range mt-8"
                type="range"
                name=""
                value={value}
                min={0}
                max={1000}
                step={100}
                onChange={rangeSlide}
              />
              <p className="text-mainFC text-base font-bold mt-6 mb-1">TOTAL</p>
              <span
                className="text-[47.2px] leading-[56.64px] font-extrabold"
                id="rangeValue"
              >
                ${value.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Range;
