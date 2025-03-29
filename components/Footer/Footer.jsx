import React from 'react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/images/bot.png" alt="Logo" className="h-12 w-12 mr-3" />
            <span className="text-2xl font-bold">Maviro</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaDiscord size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm mb-4">
            Botunuzun Adı © 2023. Tüm hakları saklıdır.
          </p>
          <p className="text-center text-xs text-gray-400 mb-4">
            Bu bot, Discord topluluğunuz için harika özellikler sunar. Daha fazla bilgi için sosyal medya hesaplarımızı takip edin.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <a href="/privacy-policy" className="hover:text-gray-200">Gizlilik Politikası</a>
            <span>|</span>
            <a href="/terms-of-service" className="hover:text-gray-200">Hizmet Şartları</a>
            <span>|</span>
            <a href="/contact" className="hover:text-gray-200">İletişim</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
