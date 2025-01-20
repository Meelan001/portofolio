import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatButton = () => {
  const handleChatClick = () => {
    // Replace 'YOUR_PHONE_NUMBER' with the actual phone number in international format.
    window.open("https://wa.me/+9779761846968", "_blank");
  };

  return (
    <div className="fixed bottom-5 right-10">
      <button
        onClick={handleChatClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center"
      >
        <FaWhatsapp  className="h-[30px] w-[30px]"/>
      </button>
    </div>
  );
};

export default ChatButton;
