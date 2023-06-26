import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";
import loginService from "../services/authentication";


const Login = () => {

    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const submitLogin = async (e) => {
        const user = await loginService.login({ username, password });
        console.log('userr', user);
    }

    return (
        <div className="container mt-5">

            <div className="w-25 m-auto">
                <form>
                    <div className="form-outline mb-4">
                        <Input type="text" inputChangeHandler={ (e) => setUserName(e.target.value) }/>
                        <Label className="form-label" name="User Name"/>
                    </div>

                    <div className="form-outline mb-4">
                        <Input type="password" inputChangeHandler={ (e) => setPassword(e.target.value) }/>
                        <Label className="form-label" name="Password"/>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" defaultChecked />
                                <Label className="form-check-label" name="Remember Me"/>
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