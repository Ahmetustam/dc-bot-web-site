import Cards from "@/components/Cards/Cards";
import StatCards from "@/components/Cards/StatCards";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  const config = {
    botdavet: "https://google.com",
  };

  return (
    <>
      <Head>
        <title>Maviro - Discord Bot</title>
        <meta name="description" content="Maviro ile sunucunuz daha iyi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center h-[600px] gap-10 bg-gradient-to-r from-teal-400 to-blue-500 p-10 rounded-lg shadow-2xl" data-aos="fade-up">
          <div className="text-center">
            <h1 className="md:text-7xl text-5xl font-extrabold text-white">
              <span className="text-yellow-300">Maviro</span> ile sunucunuz daha iyi
            </h1>
            <p className="text-white mt-4 text-xl">
              Güçlü ve güvenilir komutlar ile sunucunuzu yönetin
            </p>
          </div>
          <div className="flex gap-5">
            <a
              href={config.botdavet}
              className="bg-yellow-300 font-semibold hover:bg-yellow-400 px-8 py-3 rounded-lg text-white hover:-translate-y-3 duration-300"
            >
              Sunucuna Ekle
            </a>
            <a
              href={config.botdavet}
              className="bg-white px-8 py-3 rounded-lg text-blue-600 hover:bg-gray-200 flex justify-center items-center hover:translate-y-3 duration-300"
            >
              Giriş Yap
            </a>
          </div>
        </div>

        <div className="mt-20" data-aos="fade-right">
          <div className="md:flex flex flex-wrap text-center justify-between items-center">
            <div className="w-[600px] h-[300px] relative">
              <Image
                alt="Maviro Background"
                src={"/images/pb-bg.png"}
                fill
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-10 md:mt-0">
              <h1 className="text-5xl font-bold">
                <span className="text-yellow-300">Maviro</span>
                <span className="text-white">Bot</span>
              </h1>
              <p className="md:w-[450px] w-[300px] text-white font-medium text-sm mt-4">
                Yetkili ve koruma komutları ile sunucunuzu daha güvenli hale getirin
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20" data-aos="fade-left">
          <Cards />
        </div>

        <div className="md:flex flex-wrap justify-center md:justify-between items-center my-10" data-aos="zoom-in">
          <div className="flex flex-col gap-5 my-10">
            <h1 className="text-4xl font-bold">
              <span className="text-yellow-300">Maviro</span>
              <span className="text-white">Bot</span>
            </h1>
            <div className="flex justify-start flex-wrap gap-10">
              <StatCards />
            </div>
          </div>
          <div>
            <p className="w-[330px] text-gray-400 font-semibold">
özellik
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
