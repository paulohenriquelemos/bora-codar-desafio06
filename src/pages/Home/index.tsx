import qrCode from '../../assets/QR Code.png'

export function Home() {
  const before =
    "before:content[''] before:absolute before:w-6 before:h-6 before:bg-purple-900 before:rounded-full before:-top-3 before:-left-3"
  const after =
    "after:content[''] after:absolute after:w-6 after:h-6 after:bg-purple-900 after:rounded-full after:-top-3 after:-right-3"

  return (
    <div className="font-rubik w-[21rem] flex flex-col justify-center items-center">
      <header>
        <h1 className="text-xl font-medium text-white">Cartão de embarque</h1>
      </header>
      <main className="w-full divide-y-2 divide-dashed">
        <section className="mt-5 w-full bg-white rounded-t-3xl p-8">
          <div className="flex justify-between">
            <div>
              <span className="block text-sm text-span">Voo</span>
              <strong className="block text-base font-medium">RS995</strong>
            </div>
            <div className="text-right">
              <span className="block text-sm text-span">Data</span>
              <strong className="block text-base font-medium">
                01/03/2023
              </strong>
            </div>
          </div>
          <div className="relative mt-6 flex justify-between">
            <div>
              <span className="block text-sm text-span">São Paulo, Brasil</span>
              <strong className="block text-[2.5rem]">GRU</strong>
              <span className="block text-base">17:00</span>
            </div>
            <div className="text-right">
              <span className="block text-sm text-span">
                São Francisco, EUA
              </span>
              <strong className="block text-[2.5rem]">SFO</strong>
              <span className="block text-base">
                04:48<sup>+1</sup>
              </span>
            </div>
          </div>
        </section>
        <section className={`relative w-full bg-white p-8 ${before} ${after}`}>
          <div className="flex justify-between">
            <div>
              <span className="block text-sm text-span">Passageiro</span>
              <strong className="block text-base font-medium">
                Paulo Henrique
              </strong>
            </div>
            <div className="text-right">
              <span className="block text-sm text-span">Assento</span>
              <strong className="block text-base font-medium">28A</strong>
            </div>
          </div>
        </section>
        <section
          className={`relative w-full bg-white rounded-b-3xl p-8 ${before} ${after}`}
        >
          <div className="flex justify-between">
            <div>
              <span className="block text-sm text-span">Embarque</span>
              <strong className="flex items-center justify-center bg-purple-800 w-[3.375rem] h-[1.6875rem] rounded-lg text-white font-medium">
                16:15
              </strong>
              <span className="block text-sm mt-4 text-span">Terminal</span>
              <strong className="block font-medium">2</strong>
              <span className="block text-sm mt-4 text-span">Portão</span>
              <strong className="block font-medium">15</strong>
            </div>
            <div className="text-center">
              <img src={qrCode} alt="" />
              <span className="text-sm text-span">Grupo de embarque: 3</span>
            </div>
          </div>
          <span className="block text-center mt-6">
            <strong>Atenção: </strong>o portão fecha 16:45
          </span>
        </section>
        <p className="text-white text-sm opacity-70 text-center mt-5 !border-none">
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </p>
      </main>
    </div>
  )
}
