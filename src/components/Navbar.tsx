import { MainLogo } from "../../public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { navbarData } from "../Data/navbarData";
import { BsTelephone } from "react-icons/bs";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar">
      <div className="container flex items-center">
        <div className="navbar--logo w-30">
          <Image src={MainLogo} alt="Logo" width={180} />
        </div>

        <div className="navbar--links flex items-center w-70 justify-evenly">
          <div>
            <ul className="flex h-[100px] items-center gap-12">
              {navbarData.map((l) => (
                <li
                  key={l.id}
                  className={`h-[100%] flex items-center hover:border-b-4 hover:border-orange-600 transition ease-in duration-5000  ${
                    router.pathname === l.link
                      ? "border-b-4 border-orange-600 transition ease-in duration-5000"
                      : ""
                  }`}
                >
                  <Link href={l.link} className="font-bold py-5">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar--links-contact">
            <div className="nav-contact">
              <Link href="/" className="flex items-center">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ fontSize: 20, color: "white" }}
                  />
                </div>
                <div className="number">
                  <p className="btn-effect font-bold text-sm">+1235 455 677</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
