import { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";
import loginService from "../services/authentication";
import { useNavigate } from "react-router-dom";
import { AuthUpdateContext } from "../context";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    const setAuthUser = useContext(AuthUpdateContext);

    const submitLogin = async (e) => {


        try {
            const user = await loginService.login({ email, password });
            
            if(user){
                window.localStorage.setItem("loggedUser", JSON.stringify(user));

                setAuthUser(user);
                setEmail('');
                setPassword('');
                navigation('/')
            }
        }
        catch(exception) {
            alert(exception.response.data.error)
        }
    }

    return (
        <div className="container mt-5">

            <div className="w-25 m-auto">
                <form>
                    <div className="form-outline mb-4">
                        <Label className="form-label" name="Email"/>
                        <Input type="email" inputChangeHandler={ (e) => setEmail(e.target.value) }/>
                    </div>

                    <div className="form-outline mb-4">
                        <Label className="form-label" name="Password"/>
                        <Input type="password" inputChangeHandler={ (e) => setPassword(e.target.value) }/>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <Label className="form-check-label" name="Remember Me"/>
                                <input className="form-check-input" type="checkbox" value="" defaultChecked />
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <Button submitLogin={submitLogin} btnName="Login"/>
                </form>
            </div>
        </div>
    )
}

export default Login;