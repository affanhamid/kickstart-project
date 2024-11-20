import Image from "next/image";
import cloudBackground from "../../public/cloud-bg.webp";

const VerticalLine = () => {
  return <div className="bg-white/20 h-screen w-[1.5px]"></div>;
};

const HorizontalLine = () => {
  return <div className="bg-white/20 w-[460px] h-[1.5px]"></div>;
};

export default function Home() {
  return (
    <main>
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 px-[276px] flex justify-between">
          <VerticalLine />
          <VerticalLine />
          <VerticalLine />
          <VerticalLine />
          <VerticalLine />
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 pt-[245px] pb-[310px] flex flex-col items-center justify-between">
          <HorizontalLine />
          <HorizontalLine />
        </div>
        <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <div className="w-[560px] aspect-square border border-[1px] border-white/40 rounded-full transform -translate-y-[30px]" />
        </div>
        <div
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backgroundImage:
              "radial-gradient(50% 50%, rgb(26, 26, 26) 0%, rgb(0, 0, 0) 100%)",
            opacity: "75%",
          }}
        ></div>

        <Image
          src={cloudBackground}
          width={1024}
          height={720}
          className="w-full h-full object-cover"
          alt="clouds"
        />
      </div>
      <nav className="absolute bottom-0 w-screen pb-[20px] flex justify-center">
        <div className="mx-3 flex h-fit w-fit min-w-0 items-end gap-[10px] rounded-[20px] border-y-[0.075rem] border-[#404040b1] bg-[#00000051] p-[10px] backdrop-blur-[15px]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </main>
  );
}
