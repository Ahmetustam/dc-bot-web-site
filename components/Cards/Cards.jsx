import React, { useEffect } from "react";
import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CardsItem = ({ title, desc, icon }) => {
  return (
    <div className="text-center flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600">
      <div className="text-4xl text-yellow-300">
        {icon}
      </div>
      <div className="text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="md:w-[400px] w-[300px] text-gray-400 font-medium mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Cards = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
      <CardsItem
        title="Performans"
        desc="Bot hızlı ve performanslı, sunucunuzu daha iyi hale getirin."
        icon={<FaRocket />}
      />
      <CardsItem
        title="Güvenlik"
        desc="Gelişmiş güvenlik özellikleri ile sunucunuzu koruyun."
        icon={<FaShieldAlt />}
      />
      <CardsItem
        title="Özelleştirilebilir"
        desc="Botunuzu ihtiyaçlarınıza göre özelleştirin."
        icon={<FaCogs />}
      />
    </div>
  );
};

export default Cards;
