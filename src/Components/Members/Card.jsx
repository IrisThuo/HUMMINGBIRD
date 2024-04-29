import React from 'react';
import styles from './members.module.css'

function Card({image, name, desc}) {
    return (
        <div className={styles.card}>
            <img  src={image} alt='/'/>
            <h3 className='text-1xl text-center font-serif text-[#0288D1] font-bold'>{name}</h3>
            <p className='text-1xl text-center font-serif'>{desc}</p>
        </div>
    );
}

export default Card;
