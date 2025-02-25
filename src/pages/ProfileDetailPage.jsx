import Wrapper from "../components/wrapper";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";

const ProfileDetailPage = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState(null);

    useEffect (() => {
        fetch(`https://web.ics.purdue.edu/~whitak44/profile-app/fetch-data-with-id.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data)
                console.log(data)
    });
    }, [id])

  return(

        <Wrapper>
            {!profile ? (
                <p>Loading...</p>
            ): (
           <> 
          <h1>{profile.name}</h1>
          <p>
              <a href = {`mailto:${profile.email}`}> {profile.email} </a>
      </p><p>{profile.bio}</p>
      <img src={profile.img} alt={profile.name} />
      </>
            )}
        </Wrapper>
        
  );
};

export default ProfileDetailPage;