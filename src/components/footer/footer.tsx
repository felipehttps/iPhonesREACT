import React from 'react';
import styles from './footer.module.css';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://www.instagram.com/iphonesJl/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.instagram.com/iphonesJl/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/iphonesJl/"><i className="fa-solid fa-location-dot"></i></a>
            <a href="https://www.instagram.com/iphonesJl/"><i className="fa-solid fa-house"></i></a>
        </footer>
    );
};

export default Footer;