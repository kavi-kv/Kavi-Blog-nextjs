"use client" 
import React from 'react'
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

function Login() {

  const session = useSession();
  const router = useRouter();

  if(session.status === "authenticated"){
    router?.push("/dashboard");
  }
  if(session.status === "loading"){
    return <p>Loading.....</p>
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials",{email,password})
   
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <h3>Or</h3>
      <button onClick={()=> signIn('google')} className={styles.googleButton}>Login In with Google</button>
    </div>
  )
}

export default Login
