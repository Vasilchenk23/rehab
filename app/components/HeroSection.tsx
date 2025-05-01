import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  paragraph: string;
  imageSrc: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function HeroSection({
  heading,
  paragraph,
  imageSrc,
  buttonText = "Записатися",
  buttonHref = "#contact",
}: HeroSectionProps) {
  return (
    <section className="bg-[#5DD3D3] relative px-11 pb-24 overflow-hidden">
      <div className="w-full max-w-[1451px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-8xl font-normal mb-20 text-white font-[CaprasimoRegular]">
            {heading}
          </h1>
          <p className="mt-4 font-bold uppercase text-5xl text-white">
            {paragraph}
          </p>
          <a
            href={buttonHref}
            className="mt-6 inline-block uppercase bg-[#FF4878] text-white px-11 py-3 rounded-full"
          >
            {buttonText}
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-4">
          <Image width={100} height={100} src={imageSrc} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}
