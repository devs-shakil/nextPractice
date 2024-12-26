import Image from "next/image";
import Counter from "./Components/Client/Counter";
import CounterTwo from "./Components/Client/CounterTwo";

export default function Home() {
  return (
   <>
    <h2>Home page</h2>
    <Counter/>
    <CounterTwo/>
   </>
  );
}
