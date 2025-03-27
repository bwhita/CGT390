import Wrapper from "../components/wrapper";
import {useParams} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styles from "../styles/profiledetail.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const ProfileDetailPage = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState({});
    const { isLogin } = useContext(AuthContext);

    useEffect (() => {
        fetch(`https://web.ics.purdue.edu/~whitak44/profile-app/fetch-data-with-id.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data)
      });
    }, [id]);

  return(

        <Wrapper>
          <h1>{profile.name}</h1>
          <div className= {styles["flex-container"]}>
            <p>{profile.title}</p>
          <p>
              <a href = {`mailto:${profile.email}`}> {profile.email} </a>
      </p>
      <p>{profile.bio}</p>
      <img src={profile.img} alt={profile.name} />
      {isLogin && <Link to = "edit" className = {styles['button']}>Edit Profile</Link>}
        </div>
        </Wrapper>
        
  );
};

export default ProfileDetailPage;