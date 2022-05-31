import {FaGithub} from 'react-icons/fa'
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.innerHeader}>
                <img src="/images/logo.svg" alt="Ignews logo" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
            <SignInButton/>
        </header>
    )   
}