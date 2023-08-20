import CoffeeList from "./components/CoffeeList/CoffeeList";
import Intro from "./components/Intro/Intro";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full px-3">
      <article className="flex justify-center items-center">
        <div className="bg-gradient-to-br from-[#EBE5F9] to-[#F1E9C9] opacity-15">
          <Intro/>
        </div>
      </article>
      <article className="flex flex-col">
        <CoffeeList />
      </article>
    </main>
  )
}
