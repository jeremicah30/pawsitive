import { cardData } from "@/Data/carddata";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Card = () => {
    console.log(cardData);

    return (
        <div className="card py-[100px]">
            <div className="container">
                <div className="grid grid-cols-4 gap-10">
                    {cardData.map((c) => (
                        <div
                            key={c.title}
                            className="max-w-sm p-10 bg-[#f2f2f4] rounded-[30px] shadow"
                        >
                            <div>
                                <Image
                                    src={c.image.src}
                                    alt="Image Icon"
                                    width={80}
                                    height={80}
                                />
                            </div>

                            <div className="h-[220px] flex flex-col justify-center">
                                <h5 className="mb-2 text-[1.8rem] font-extrabold tracking-tight ">
                                    {c.title}
                                </h5>

                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    {c.description}
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center text-mainFC hover:text-black text-[.9rem] uppercase font-bold flex items-center"
                            >
                                <span className="pr-3">{c.linkName}</span>
                                <BsArrowRight />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Card;
