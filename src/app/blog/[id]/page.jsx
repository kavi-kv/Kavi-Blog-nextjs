import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import notFound from "next/navigation"

let post = [
  {
    title: "How To Read Effectively",
    desc: "Amet consectetur adipisicing elit. Est accusamus sunt inventore sed distinctio",
    username: "Mohamed Ali",
    img: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusamus sunt inventore sed distinctio, delectus nesciunt ab libero ratione praesentium repellat hic asperiores dolore reiciendis voluptatem laborum animi qui architecto odit! Ratione nisi error, culpa, magnam iure provident consectetur libero facere quam architecto sapiente excepturi nihil. Quas iure corporis tenetur! Magnam accusamus quia ipsam debitis dolores, officiis, minus modi ab placeat, suscipit consectetur reiciendis aut quam? Voluptates, error, explicabo aliquid nam quia reprehenderit corporis atque expedita consequatur dolore, beatae asperiores! Eveniet distinctio quos explicabo totam pariatur perferendis neque repudiandae? Sapiente aut iure quidem odit cupiditate id pariatur nam assumenda blanditiis. Sequi veritatis, facere fuga maxime magni eos. Molestiae dolor illo non, iusto repellendus harum voluptate nulla qui hic deserunt necessitatibus dicta numquam, exercitationem voluptatibus at optio dolore! Vel nulla quam error doloribus similique? Nihil sapiente culpa placeat incidunt nobis aperiam minus error illo id. Veritatis quia autem earum deserunt illum!",
  },
];

async function getData(id) {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`)
  
    if(!response.ok)
    {
      return notFound()
    }
  
  
    return response.json();
  }

const BlogPost = async ({params}) => {

    const postsData = await getData(params.id)

    const data = post[0];
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{postsData.title}</h1>
          <p className={styles.desc}>{postsData.desc}</p>
          <div className={styles.author}>
            <Image
              src={postsData.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{postsData.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{postsData.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
