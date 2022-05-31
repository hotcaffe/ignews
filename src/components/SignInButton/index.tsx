import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";

export function SignInButton() {
  const [isLogged, setIsLogged] = useState(false);

  return isLogged ? (
    <button className={styles.logged}>
      <FaGithub />
      Hotcaffe
      <IoMdClose className={styles.close} />
    </button>
  ) : (
    <button className={styles.signIn}>
      <FaGithub />
      Sign in with GitHub
    </button>
  );
}
