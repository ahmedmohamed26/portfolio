import Image from "next/image";
import { MarkerIcon, EmailIcon, PhoneIcon } from "../public/svgs";
export default function Home() {
  return (
    <section className="wrapper">
      <div className="flex justify-between items-center">
        <h2 className="main-gray-color	text-2xl  font-PoppinsRegular">
          Frontend Developer
        </h2>
        <h2 className="text-white	text-xs tracking-[.05em] relative bg-green-500 py-1 px-2 rounded-full font-PoppinsRegular">
          AVAILABLE FOR WORK
        </h2>
      </div>
      <div className="profile-details mt-9">
        <div className="info flex justify-between items-top">
          <div>
            <h1 className="text-4xl  main-color ">I'm Ahmed Mohamed</h1>
            <p className="mt-4 font-PoppinsRegular light-gray-color">
              Frontend Developer From Egypt
            </p>
            <p className="font-PoppinsRegular light-gray-color ">
              Currently Working At{" "}
              <a
                href="https://www.afaqy.com/"
                target="_blank"
                className="text-green-700 font-bold"
              >
                AFAQY
              </a>
            </p>
          </div>
          <Image
            width={150}
            height={150}
            src="/images/profile-image.jpg"
            alt="profile-image"
            className="rounded-lg"
          />
        </div>
        <div className="bg-gray-100	p-4 mt-8 rounded-md">
          <h3 className="main-color">Contact Me</h3>
          <ul className="mt-5 gap-3 flex flex-col	">
            <li className="flex items-center">
              <MarkerIcon className="text-[#4f535f] bg-white p-2 rounded-full w-8 h-8 drop-shadow-md border-zinc-600 " />
              <span className="mx-3 font-PoppinsRegular light-gray-color ">
                Cairo , Egypt
              </span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="  text-[#4f535f] bg-white p-2 rounded-full w-8 h-8 drop-shadow-md border-zinc-600 " />
              <a href={`tel:${+201124269532}`}>
                {" "}
                <span className="mx-3 font-PoppinsRegular light-gray-color ">
                  +20 112 4269 532
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
