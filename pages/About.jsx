import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUsers,
  FaServer,
  FaCode,
  FaHeart,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-down">
          Hakkımızda
        </h1>
        <p
          className="text-gray-400 text-lg"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          PlusBot, sunucunuzu yönetmenize yardımcı olan güçlü bir Discord
          botudur. Gelişmiş komutlar ve özellikler ile sunucunuzu daha iyi hale
          getirin.
        </p>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <div className="text-center flex flex-col items-center">
            <FaUsers className="text-4xl text-yellow-300 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Ekibimiz</h2>
            <p className="text-gray-400">
              PlusBot ekibi, deneyimli geliştiricilerden ve destek uzmanlarından
              oluşur. Amacımız, en iyi Discord botunu sunmaktır.
            </p>
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-center flex flex-col items-center">
            <FaServer className="text-4xl text-yellow-300 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Sunucumuz</h2>
            <p className="text-gray-400">
              PlusBot, yüksek performanslı sunucular üzerinde çalışır ve her
              zaman en iyi hizmeti sunar.
            </p>
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center flex flex-col items-center">
            <FaCode className="text-4xl text-yellow-300 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Teknoloji</h2>
            <p className="text-gray-400">
              PlusBot, en son teknolojiler kullanılarak geliştirilmiştir ve
              sürekli olarak güncellenmektedir.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-20 bg-gradient-to-r from-blue-500 to-teal-500 p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Misyonumuz ve Vizyonumuz
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Misyonumuz</h3>
            <p className="text-gray-100 text-lg">
              PlusBot olarak, Discord sunucularını daha güvenli, daha verimli ve
              daha eğlenceli hale getirmeyi amaçlıyoruz. Kullanıcılarımızın
              ihtiyaçlarına göre sürekli olarak yeni özellikler ekliyor ve
              mevcut özellikleri geliştiriyoruz.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Vizyonumuz</h3>
            <p className="text-gray-100 text-lg">
              PlusBot, dünya çapında en çok tercih edilen Discord botu olmayı
              hedeflemektedir. Kullanıcılarımızın memnuniyeti bizim için en
              önemli önceliktir.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-20 bg-gray-800 p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Değerlerimiz
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          <div className="text-center flex flex-col items-center">
            <FaHeart className="text-4xl text-yellow-300 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Tutku</h3>
            <p className="text-gray-400">
              İşimizi tutkuyla yapıyoruz ve en iyi sonuçları elde etmek için
              çalışıyoruz.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaLightbulb className="text-4xl text-yellow-300 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Yenilik</h3>
            <p className="text-gray-400">
              Sürekli olarak yenilikler yaparak kullanıcılarımıza en iyi
              deneyimi sunuyoruz.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaHandsHelping className="text-4xl text-yellow-300 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Destek</h3>
            <p className="text-gray-400">
              Kullanıcılarımıza her zaman en iyi desteği sağlamak için
              buradayız.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-20 bg-gray-800 p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Takım Üyeleri
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <img
              src="/images/bot.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Ahmet Yılmaz</h3>
            <p className="text-gray-400">Geliştirici</p>
          </div>
          <div className="text-center">
            <img
              src="/images/bot.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Ayşe Demir</h3>
            <p className="text-gray-400">Destek Uzmanı</p>
          </div>
          <div className="text-center">
            <img
              src="/images/bot.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Mehmet Kaya</h3>
            <p className="text-gray-400">Proje Yöneticisi</p>
          </div>
        </div>
      </div>
      <div
        className="mt-20 bg-gray-800 p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          İletişim
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Sorularınız veya geri bildirimleriniz için bizimle iletişime geçin:
        </p>
        <p className="text-yellow-300 text-center">email@example.com</p>
      </div>
      <div
        className="mt-20 bg-gray-800 p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Sıkça Sorulan Sorular
        </h2>
        <div className="text-gray-400">
          {[
            {
              question: "PlusBot nedir?",
              answer:
                "PlusBot, sunucunuzu yönetmenize yardımcı olan güçlü bir Discord botudur.",
            },
            {
              question: "Nasıl kurulur?",
              answer:
                "PlusBot'u sunucunuza eklemek için 'Sunucuna Ekle' butonuna tıklayın ve talimatları izleyin.",
            },
            {
              question: "Hangi özelliklere sahiptir?",
              answer:
                "PlusBot, gelişmiş güvenlik, özelleştirilebilir komutlar ve daha birçok özellik sunar.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center bg-gray-700 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-yellow-300">
                  {faq.question}
                </h3>
                <span className="text-yellow-300">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <CSSTransition
                in={activeIndex === index}
                timeout={300}
                classNames="faq"
                unmountOnExit
              >
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <p className="text-white">{faq.answer}</p>
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
