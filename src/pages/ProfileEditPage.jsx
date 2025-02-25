import Wrapper from "../components/wrapper";
import { useParams } from "react-router-dom";


const ProfileEditPage = () => {
  const {id} = useParams();
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      fetch(`https://web.ics.purdue.edu/~whitak44/profile-app/delete-profile.php?id=${id}`), {
        method: "POST",
        credentials: "include",
    }
  }
}


  return(
        <Wrapper>
          
        </Wrapper>
  );
};

export default ProfileEditPage
