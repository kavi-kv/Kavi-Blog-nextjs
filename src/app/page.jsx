import Image from "next/image";
import React from "react";
import style from "./page.module.css";
import HeroImage from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>
          Better design for your digital products.
        </h1>
        <p className={style.description}>
          Turnig your Idea into Reality. We bring togather the teams from the
          global tech industry.
        </p>
       <Button url="/" text="See Our Works"/>
      </div>
      <div className={style.item}>
        <Image src={HeroImage} alt="heroImage" className={style.heroImage} />
      </div>
    </div>
  );
}
