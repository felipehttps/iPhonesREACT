import React from 'react';
import styles from '../header/header.module.css';


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src="/images/logo-400.jpg" alt="Logo do site" className={styles.logo} />
                <div className={styles.buttons}>
                    <button onClick={() => window.location.href = '/signup'}>Cadastre-se</button>
                    <button onClick={() => window.location.href = '/login'} id="login">Entrar</button>
                </div>
            </div>
        </header>
    );
};

export default Header;   