// src/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="bg-black text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Want to build <span className="text-purple-500">your</span> websites?
      </h2>
      <p className="text-gray-400 mb-8">
        Contact Me.
      </p>
      <a href="mailto:shushrushamaharjan@gmail.com">
        <button className="bg-transparent border-2 border-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-500 transition duration-300">
          Let's get in touch
        </button>
      </a>
      <div className="flex justify-center mt-12 space-x-4">
        <a href="https://github.com/Shushrusha-Maharjan" aria-label="GitHub" className="text-gray-400 hover:text-white transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12a12.07 12.07 0 008.205 11.387c.599.111.82-.26.82-.578v-2.052c-3.338.727-4.042-1.602-4.042-1.602a3.18 3.18 0 00-1.333-1.759c-1.089-.743.082-.729.082-.729a2.512 2.512 0 011.83 1.235 2.518 2.518 0 003.448.982 2.515 2.515 0 01.75-1.579c-2.667-.302-5.467-1.33-5.467-5.93a4.63 4.63 0 011.237-3.219 4.29 4.29 0 01.115-3.178s1.007-.323 3.301 1.229a11.515 11.515 0 016.005 0c2.293-1.552 3.301-1.229 3.301-1.229a4.291 4.291 0 01.115 3.178 4.626 4.626 0 011.237 3.219c0 4.61-2.8 5.624-5.471 5.921a2.81 2.81 0 01.801 2.188v3.252c0 .319.22.691.825.574A12.071 12.071 0 0024 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="mailto:shushrushamaharjan@gmail.com" aria-label="Gmail" className="text-gray-400 hover:text-white transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 8.707l-5 3.5-5-3.5V8h10v2.707zM7.618 10.794L12 13.941l4.382-3.147L18 13.5v4.5H6v-4.5l1.618-2.706z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/shushrusha-maharjan-471a75210/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727V22.27C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.056 20.452H3.639V9.023h3.417v11.429zm-1.707-13.07c-1.092 0-1.976-.89-1.976-1.985s.884-1.985 1.976-1.985c1.092 0 1.976.89 1.976 1.985s-.884 1.985-1.976 1.985zM20.451 20.452h-3.417v-5.784c0-1.379-.025-3.157-1.923-3.157-1.926 0-2.222 1.504-2.222 3.056v5.885h-3.417V9.023h3.285v1.561h.046c.458-.871 1.575-1.785 3.241-1.785 3.463 0 4.104 2.281 4.104 5.248v6.405z"/>
          </svg>
        </a>
      </div>
      
    </div>
  );
};

export default Footer;
