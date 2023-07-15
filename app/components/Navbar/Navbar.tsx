import Image from "next/image"

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
            <div>Florianópolis/SC</div>
            <div>Cart</div>
        </div>
    </div>
  )
}

export default Navbar