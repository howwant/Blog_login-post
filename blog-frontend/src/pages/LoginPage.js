import AuthTemplate from "../components/auth/AuthTemplate";
import LoginFrom from "../containers/auth/LoginForm";

const LoginPage = () => {
    return  (
        <AuthTemplate>
            <LoginFrom/>
        </AuthTemplate>
    );
};
export default LoginPage;