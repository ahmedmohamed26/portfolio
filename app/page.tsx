import Image from "next/image";

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
            <h1 className="text-4xl  text-slate-800 font-bold font-PoppinsMedium">
              I'm Ahmed Mohamed
            </h1>
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
        <ul></ul>
      </div>
    </section>
  );
}
