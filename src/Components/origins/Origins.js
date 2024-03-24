import React from 'react';
import styles from './origins.module.css'
import  join from '../../assets/joinus.png'
import { NavLink } from 'react-router-dom';

function Origins(props) {
    return (
        <div className={styles.driver}>
        <div className={styles.left}>
            <img src={join} alt='/'/>
        </div>

        <div>
        <h2>Together we can make a difference <span>learn more on how to join us</span></h2>
        <p> We are a Society of passionate Individuals who design project solutions that capitalise on social engagement and have a direct impact on the environment</p>
        <div className={styles.join_btn}>
        <NavLink to="/join"><button>Join us</button></NavLink>
      </div>


        </div>

        </div>

    );
}

export default Origins;
