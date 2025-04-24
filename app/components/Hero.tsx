export default function Hero() {
    return (
      <section className="bg-[#5DD3D3] relative px-11 pb-24 overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h1 className="text-8xl font-normal mb-20 text-white font-[CaprasimoRegular]">Family Rehab</h1>
            <p className="mt-4 font-bold uppercase text-5xl text-white">Центр сімейної реабілітації</p>
            <a href="#contact" className="mt-6 inline-block uppercase bg-[#FF4878] text-white mt-22 px-11 py-3 rounded-full">
              Записатися
            </a>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 px-4">
            <img src="/img/main.svg" alt="Doctors and kids" />
          </div>
        </div>
      </section>
    )
  }
  