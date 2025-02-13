import style from '../styles/card.module.css';
import PropTypes from 'prop-types';        

const Card = ({img, name, title, email, animate, updateAnimate}) => {
    //lab09
    // const [text, setText] = useState("");
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .then((data) => 
    //     {console.log("fetching...")
    //         setTitle(data[0].title);
    //     const [test, setTest] = useState("Hi");
    //     });
        

    return(
        <div className = {`${style["profile-card"]} ${animate ? style["is-entering"] : ""} `}
        onAnimationEnd = {updateAnimate}
        >
            <div className = {style["profile-card_image"]}> 
                <img src = {img} alt = {name} />
            </div>
            <div className = {style["profile-card_content"]}>
                <p>{name}</p>
                <p>{title}</p>
                <p><a href = {`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    )
}
Card.propTypes = {img: PropTypes.string}

export default Card