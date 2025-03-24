import React from 'react';
import styles from './card.module.css';

interface CardProps {
    image: string;
    alt: string;
    isActive?: boolean;
}

const Card: React.FC<CardProps> = ({ image, alt, isActive = false }) => {
    return (
        <div className={`${styles.card} ${isActive ? styles.ativo : ''}`}>
            <img src={image} alt={alt} />
        </div>
    );
};

export default Card;