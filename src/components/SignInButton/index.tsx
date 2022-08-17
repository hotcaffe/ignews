import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

export function SignInButton() {
  const {data: sessions} = useSession()

  return sessions ? (
    <button className={styles.logged}>
      <FaGithub />
      {sessions.user.name}
      <IoMdClose className={styles.close} onClick={() => signOut()}/>
    </button>
  ) : (
    <button className={styles.signIn} onClick={() => signIn('github')}>
      <FaGithub />
      Sign in with GitHub
    </button>
  );
}
