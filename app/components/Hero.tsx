
export default function Hero() {
    return (
      <section className="bg-[#5DD3D3] relative pt-16 pb-24 overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h1 className="text-5xl font-extrabold text-white">Family Rehab</h1>
            <p className="mt-4 text-xl text-white">Центр сімейної реабілітації</p>
            <a href="#contact" className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-full">
              Записатися
            </a>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 px-4">
            <img src="/images/hero-doctors.png" alt="Doctors and kids" />
          </div>
        </div>
      </section>
    )
  }
  