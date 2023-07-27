'use client'
import Image from "next/image"
import { Button } from "../Button/Button"
import Link from 'next/link'

const Navbar = () => {


  return (
    <div className="flex justify-between items-center w-[1440px] py-8">
        <div>
          <Link href="/">
            <Image
              src={"/Logo.png"}
              alt="Coffee delivery Logo"
              width={84.95}
              height={40}
            />
          </Link>
        </div>
        <div className="flex flex-row justify-around items-center gap-4">
            <div>
              <Button
                iconName={'purpleMap'}
                styles="purpleButton"
              >
                Florianópolis,SC
              </Button>
            </div>
            <div>
            <Link href="/checkout">
              <Button
                iconName="yellowCart"
                styles="yellowButton"
              />
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar