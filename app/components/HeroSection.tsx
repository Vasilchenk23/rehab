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
  buttonHref = "/regiester",
}: HeroSectionProps) {
  return (
    <section className="bg-[#5DD3D3] relative px-6 lg:px-24 pb-24 overflow-hidden">
      <div className="flex w-full max-w-[1451px] mx-auto flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-5xl lg:text-8xl font-normal mb-10 lg:mb-20 text-white font-[CaprasimoRegular]">
            {heading}
          </h1>
          <p className="mt-4 lg:mt-8 font-bold uppercase text-2xl lg:text-5xl text-white leading-tight min-h-[3.5rem]">
            {paragraph}
          </p>
          <a
            href={buttonHref}
            className="mt-20 inline-block uppercase bg-[#FF4878] hover:bg-[#FF0446] text-white px-11 py-3 rounded-full transition-colors duration-300"
          >
            {buttonText}
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
          <Image
            src={imageSrc}
            alt="Hero image"
            width={800}
            height={800}
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
