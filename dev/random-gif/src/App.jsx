import Random from "./components/Random";
import Tag from "./components/Tag"


export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative  items-center">
      <h3 className=" bg-white rounded-lg w-11/12 text-center mt-[30px] px-10 py-2 text-4xl font-bold mx-auto">RANDOM GIFS</h3>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div> 
    </div>
  );
}
