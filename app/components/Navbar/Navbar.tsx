import Image from "next/image"
import { Button } from "../Button/Button"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[1440px] py-8">
        <div>
          <Image
            src={"/Logo.png"}
            alt="Coffee delivery Logo"
            width={84.95}
            height={40}
          />
        </div>
        <div className="flex flex-row justify-around items-center gap-4">
            <div>
              <Button
                styles="purpleButton"
              >
                Florianópolis,SC
              </Button>
            </div>
            <div>
              <Button
                iconName="yellowCart"
                styles="yellowButton"
              />
            </div>
        </div>
    </div>
  )
}

export default Navbar