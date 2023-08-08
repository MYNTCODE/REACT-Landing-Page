import React, { useEffect } from "react";

const BackToTopButton = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    // ตรวจสอบหากตำแหน่งมากกว่า 500px ให้แสดงปุ่ม Back To Top และหากน้อยกว่า 500px ให้ซ่อนปุ่ม
    if (currentPosition > 500) {
      document.querySelector(".back-to-top-button").style.display = "block";
    } else {
      document.querySelector(".back-to-top-button").style.display = "none";
    }
  };

  const handleBackToTopClick = () => {
    // เมื่อคลิกปุ่ม Back To Top ให้เลื่อนหน้าเพจไปที่ด้านบน
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <img
        className="back-to-top-button"
        onClick={handleBackToTopClick}
        src="https://cdn.discordapp.com/attachments/895300373911314483/1136569550398304276/up-arrow.png"
      />
    </>
  );
};

export default BackToTopButton;
