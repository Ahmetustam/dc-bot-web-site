import React, { useEffect } from "react";
import { TbServer } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { BiCommand } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const StatCardsItem = ({ number, icon, title }) => {
  return (
    <div className="text-center flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600">
      <div className="text-4xl text-yellow-300">
        {icon}
      </div>
      <div className="text-white">
        <span className="text-3xl font-bold">{number}</span>
        <h1 className="text-2xl text-blue-600 font-medium mt-2">{title}</h1>
      </div>
    </div>
  );
};

const StatCards = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
      <StatCardsItem number="15" icon={<TbServer />} title="Sunucu" />
      <StatCardsItem number="1k" icon={<HiUsers />} title="Kullanıcı" />
      <StatCardsItem number="150" icon={<BiCommand />} title="Komutlar" />
    </div>
  );
};

export default StatCards;
