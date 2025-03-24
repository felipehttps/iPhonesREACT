import React, { useEffect, useState } from 'react';
import styles from './footer/home.module.css';
import Header from './header/header';
import Card from './card/card';
import Footer from './footer/footer';
/// importar imagens



const Site: React.FC = () => {
    const cards = [
        { id: 'card1', image: '/images/iphone16pro.png', alt: 'iPhone 16 Pro' },
        { id: 'card2', image: '/images/ipad-atual-600.png', alt: 'iPad' },
        { id: 'card3', image: '/images/mac-atual.png', alt: 'Macbook' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className={styles.home}>
            <Header />
            <main className={styles.perfil}>
                <h1>Sua Loja de produtos Apple.</h1>
                <br />
                <br />
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        alt={card.alt}
                        isActive={index === activeIndex}
                    />
                ))}
                <div className={styles.cardComprar}>
                    <p>Parcele suas compras em até 12x sem juros</p>
                </div>
            </main>
            <hr />
            <fieldset className={styles.fotosTres}>
                <div className={styles.qlq}>
                    <a className={styles.nome} href="/iphones">iPhone</a>
                    <img src="/images/iphone14max.webp" alt="iPhone" />
                </div>
                <div className={styles.qlq}>
                    <a className={styles.nome} href="/ipads">iPad</a>
                    <img src="/images/ipad-front.webp" alt="iPad" />
                </div>
                <div className={styles.qlq}>
                    <a className={styles.nome} href="/mac">Macbook</a>
                    <img src="/images/i602940.webp" alt="Macbook" />
                </div>
            </fieldset>
            <hr />
            <section className={styles.sobre}>
                <ul>
                    <li className={styles.linha}>
                        Na iPhonesJL, você encontra mais do que apenas um iPhone. Oferecemos uma experiência de compra única...
                    </li>
                    <li className={styles.linha}>
                        A sua busca por um iPhone vai além da simples compra de um aparelho...
                    </li>
                    <li className={styles.linha}>
                        Oferecemos uma experiência de compra que valoriza o atendimento individualizado...
                    </li>
                </ul>
            </section>
            <hr className={styles.hrFim} />
            <Footer />
        </div>
    );
};

export default Site;
