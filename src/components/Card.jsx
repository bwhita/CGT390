import style from '../styles/card.module.css';
import PropTypes from 'prop-types';
import { useRef, useEffect, memo } from 'react';        

const Card = memo(({image_url, name, title}) => {
    const renderCounter = useRef(0);
    useEffect(() => {
        renderCounter.current = renderCounter.current + 1;
        console.log()
    })

    return(
        <div className = {`${style["profile-card"]} ${style["is-entering"]} `}>
            <div className = {style["profile-card_image"]}> 
                <img src = {image_url} alt = {name} />
            </div>
            <div className = {style["profile-card_content"]}>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    )
});
Card.propTypes = {img: PropTypes.string}

export default Card
