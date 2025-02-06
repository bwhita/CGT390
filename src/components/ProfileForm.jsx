
//lab 07 
// const ProfileForm = () => {
//     const [data, setData] = useState({ name: "", title: "", email: "", bio: "" });
//     const handleChange = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     }
//     const handleSumbit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         console.log(formData.get("name"));
//     }
//     return (
//         <form className="profile-form">
//             <input type="text" name="name" placeholder="Name" required value={data.name} onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="title" name="title" placeholder="Title" required />
//             <textarea name="bio" placeholder="some description" required></textarea>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }