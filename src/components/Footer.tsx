import { footerData } from "../Data/footerData";
import Image from "next/image";
import { Logo_Orange } from "../../public/assets/images";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
    const textData = footerData.find((t) => t.textInfo);
    const mappedData = footerData.find((f) => f.withLinks);

    return (
        <div className="footer py-[50px]">
            <div className="container grid grid-cols-4 gap-4">
                <div className="footer--socialMedia">
                    <Image src={Logo_Orange} alt="Logo Orange" />

                    <div className="footer--socialMedia-icons flex mt-5">
                        <div className="bg-orange-500 p-2 mr-2 rounded-full">
                            <FiTwitter size={20} className="text-white" />
                        </div>
                        <div className="bg-orange-500 p-2 mr-2 rounded-full">
                            <FiInstagram size={20} className="text-white" />
                        </div>
                        <div className="bg-orange-500 p-2 mr-2 rounded-full">
                            <FiFacebook size={20} className="text-white" />
                        </div>
                    </div>
                </div>

                {textData && (
                    <div className="footer--links">
                        <h2 className="text-orange-500 font-extrabold text-2xl">
                            {textData.title}
                        </h2>

                        {textData.textInfo?.map((t) => (
                            <ul>
                                <li key={t}>{t}</li>
                            </ul>
                        ))}
                    </div>
                )}

                {mappedData && (
                    <div className="footer--links">
                        <h2 className="text-orange-500 font-extrabold text-2xl">
                            {mappedData.title}
                        </h2>

                        {mappedData.sublink?.map((sl) => (
                            <ul>
                                <li key={sl.sublinkLink}>
                                    <Link href={sl.sublinkLink}>
                                        {sl.sublinkTitle}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                )}

                <div className="footer--newsletter">
                    <h2 className="text-orange-500 font-extrabold text-2xl">
                        Newsletter
                    </h2>

                    <form>
                        <div>
                            <input
                                id="default-search"
                                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your email"
                                required
                            />

                            <button
                                type="button"
                                className="text-white mt-3 w-full bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-l-full rounded-br-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Footer;
