
import Image from "next/image";
import IndonesiaImage from "@/public/Capture4.jpg";
const Home = () => {
  return (
    <div className="font-bitcount">
      <h1>Welcome to the Next.js App</h1>
      <div>
        <p className="text-xl text-blue-500 font-bold">Visit Indonesia</p>
        <Image 
        src={IndonesiaImage}
        alt="Capture4"
        width={500}
        height={300}
        blurDataURL=""
        placeholder="blur"
        
        />
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500
       text-white rounded hover:bg-green-600"
      // onClick={() => alert("Welcome to Indonesia!")}
      >
        lets visit indosnesia
      </button>
    </div>
  );
};

export default Home;
