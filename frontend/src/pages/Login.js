import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div className="container mt-5">

            <div className="w-25 m-auto">
                <form>
                    <div className="form-outline mb-4">
                        <Input type="email" inputChangeHandler={ (e) => setEmail(e.target.value) }/>
                        <Label className="form-label" name="Email Address"/>
                    </div>

                    <div class="form-outline mb-4">
                        <Input type="password" inputChangeHandler={ (e) => setPassword(e.target.value) }/>
                        <Label className="form-label" name="Password"/>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <Label className="form-check-label" name="Remember Me"/>
                            </div>
                        </div>

                        <div class="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <Button btnName="Login"/>
                </form>
            </div>
        </div>
    )
}

export default Login;