import React from "react";
import whatsappImage from  '../assets/images/WhatsApp.webp'

export const WhatsappButton = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone="
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img
          src={whatsappImage}
          alt="WhatsApp"
          class="whatsapp-logo"
        />
      </a>
    </>
  );
};
