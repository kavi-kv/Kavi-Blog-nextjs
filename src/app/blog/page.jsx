import React from 'react'
import style from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

async function getData() {
  const response = await fetch("http://localhost:3000/api/posts",{
    cache: "no-store",
  })
  if(!response.ok)
  {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={style.mainContainer}>
      {data.map((item)=> (
        <Link href={`/blog/${item._id}`} className={style.container} key={data.id}>
        <div className={style.imageContainer}>
          <Image 
            src={item.img}
            alt=''
            width={400}
            height={400}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>{item.title}</h1>
          <p className={style.desc}>{item.desc}</p>
        </div>
      </Link>
      ))}
   
    </div>
  )
}
export default Blog
