import style from '../styles/card.module.css';
import PropTypes from 'prop-types';        

const Card = ({img, name, title, email}) => {

    return(
        <div className = {`${style["profile-card"]} ${style["is-entering"]} `}>
            <div className = {style["profile-card_image"]}> 
                <img src = {img} alt = {name} />
            </div>
            <div className = {style["profile-card_content"]}>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}
Card.propTypes = {img: PropTypes.string}

export default Card
