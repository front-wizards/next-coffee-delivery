'use client'
import Image from "next/image"
import { Button } from "../Button/Button"
import Link from 'next/link'

const Navbar = () => {


  return (
    <div className="flex justify-center sm:justify-between items-center max-w-[1440px] py-8 w-full sm:px-[160px]">
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
        <div className="hidden sm:flex sm:flex-row sm:justify-around sm:items-center gap-4">
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