'use client'
import Image from 'next/image'
import  { baloo2, roboto } from '../../utils/fonts/fonts'
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

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
          <div className="block pt-4 sm:flex sm:justify-between items-center sm:pt-16 sm:pb-6">
            <div className="flex justify-between items-center gap-2">
              <div className="rounded-full p-2 border bg-[#C47F17]">
                <ShoppingCart color="#fff" weight="fill" size={15}/>
              </div>
              Compra simples e segura
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="rounded-full p-2 border bg-[#574F4D]">
                <Package color="#fff" weight="fill" size={15} />
              </div>
              Embalagem mantém o café intacto
            </div>
          </div>
          <div className="block sm:flex sm:justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <div className="rounded-full p-2 border bg-[#DBAC2C]">
                <Timer color="#fff" weight="fill" size={15}/>
              </div>
              Entrega rápida e rastreada
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="rounded-full p-2 border bg-[#8047F8]">
                <Coffee color="#fff" weight="fill" size={15}/>
              </div>
              O café chega fresquinho até você
            </div>
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