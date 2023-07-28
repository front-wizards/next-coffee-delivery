import Image from 'next/image'
import  { baloo2, roboto } from '../../utils/fonts/fonts'


const Intro = () => {
  return (
    <div className="flex justify-center px-3 md:justify-between md:items-start h-[544px] w-full md:mt-24 md:px-[160px]">
        <div>
          <div className={`${baloo2.className} text-5xl font-extrabold leading-[62.4px] text-[#272221] gap-4`}>
            <h1 className="max-w-[588px]">
              Encontre o café perfeito
              para qualquer hora do dia
            </h1>
          </div>
          <div className={`${roboto.className} text-xl font-normal leading-[26px] text-[#403937]`}>
            <p className="max-w-[588px]">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
              src={"/coffeeDelivery.svg"}
              alt="Coffee delivery"
              width={476}
              height={360}
            />
        </div>
    </div>
  )
}

export default Intro