import Wrapper from "../components/wrapper";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Wrapper>
            <h1>Login</h1>
            <AuthForm isRegister = {false} />
            <Link to = "/register" style = {{display: "block", textAlign: "center"}}>Don't have an account? Register here!</Link>
        </Wrapper>
    );
}

export default Login;