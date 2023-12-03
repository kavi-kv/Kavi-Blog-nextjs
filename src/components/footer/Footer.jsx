import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={style.container}>
      <div>@2023 Kavi. all rights reserved</div>
      <div>
        <div className={style.socialMediContainers}>
          <Image
            src="/1.png"
            width={15}
            height={15}
            alt="facebook Icon"
            className={style.icon}
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            alt="facebook Icon"
            className={style.icon}
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            alt="facebook Icon"
            className={style.icon}
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            alt="facebook Icon"
            className={style.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
