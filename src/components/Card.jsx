//lab 06
// import style from '../styles/card.module.css';
import PropTypes from 'prop-types';        

const Card = ({img, name, title, email,}) => {
//const Card = ({img, name, title, email, animate, updateAnimate}) => {

    return(
        <div className= "profile-card">
        {/* <div className = {`${style["profile-card"]} ${animate ? style["is-entering"] : ""} `} */}
        {/* onAnimationEnd = {updateAnimate} */}
        {/*> */}
            <div className = "profile-card_image">
            {/* <div className = {style ["profile-card_image"]}> 
             </div> */}
                <img src = {img} alt = {name} />
            </div>
            <div className = "profile-card_content">
            {/* <div className = {style["profile-card_content"]}> */}

                <p>{name}</p>
                <p>{title}</p>
                <p><a href = {`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    )
}
Card.propTypes = {img: PropTypes.string}

export default Card