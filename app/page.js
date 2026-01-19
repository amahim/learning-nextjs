import Image from "next/image";
import IndonesiaImage from "@/public/Capture4.jpg";
const Home = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default Home;
