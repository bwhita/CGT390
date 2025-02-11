
// lab 07 & 8
// import {useState} from "react";
// import style from "../styles/ProfileForm.module.css";

// const ProfileForm = () => {
//     const [data, setData] = useState({ name: "", title: "", email: "", bio: "", image: null });
//     const [errors, setErrors] = useState{( image: "", general: "")};
//     const [submitting, setSubmitting] = useState(false);

//     const handleChange = (e) => {
//         if (e.target.name === "image"){
//             const file = e.target.files[0];
//             if (file.size > 2000000){
//                 setErrors({})
//             }    
//         }
//         setData({ ...data, [e.target.name]: e.target.value });
//         if(e.target.name === "image");
//     }
//     const handleSumbit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         console.log(formData.get("name"));



//         if(result.success){
//             setError({})
//         }
//     }
    
    
    
    
    
//     return (
//         <form className="profile-form">
//             <input type="text" name="name" placeholder="Name" required value={data.name} onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="title" name="title" placeholder="Title" required />
//             <textarea name="bio" placeholder="some description" required></textarea>
//             <button type="submit">Submit</button>

//         <textarea

//         <label htmlFor = "image">Choose a profile picture: </label>
//         <input type = "file" id = "image" name = "image" accept = "image/png, image/jpeg, image/jpg, image/gif" onChange = {handleChange}/>
//         (errors.image && <p>{errors.image}</p>)
//         <button type = "submit" disabled = {submitting || error.image ? true: false}>Submit</button> ///////////////////////////////////////
//         {errors.general && <p>{errors.general}</p>}
//         {successMessage && <p>{successMessage}</p>}

//         </form>

//     );
// };

// export default ProfileForm;