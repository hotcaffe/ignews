import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.innerHeader}>
                <img src="/images/logo.svg" alt="Ignews logo" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
            </div>
            <SignInButton/>
        </header>
    )   
}