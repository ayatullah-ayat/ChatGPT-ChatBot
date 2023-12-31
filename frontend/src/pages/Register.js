import { useState } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

import authServices from "../services/authentication";

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const registerHandler = async () => {
        if(!email){
            setEmailError('Email is Required');
        }if(email && !email.includes('@')){
            setEmailError('Email must have @');
        }
        if(!password) {
            setPasswordError('Password is Required');
        }

        const body = {
            email,
            name,
            phone_number: phone,
            password
        }
        const savedUser = authServices.createUser(body);

        console.log('registerHandler_savedUser', savedUser);

    }
    return (
        <div className="container mt-5">
            <div className="w-25 m-auto">
                <form>
                    <div className="form-outline mb-4">
                        <Label className="form-label" name="Email"/>
                        <Input type="email" inputChangeHandler={ (e) => setEmail(e.target.value) } />
                        { emailError ? <span className='text-danger'>{ emailError }</span> : ''}
                    </div>
                    <div className="form-outline mb-4">
                        <Label className="form-label" name="Name"/>
                        <Input type="text" inputChangeHandler={ (e) => setName(e.target.value) } />
                    </div>
                    <div className="form-outline mb-4">
                        <Label className="form-label" name="Phone Number"/>
                        <Input type="number" inputChangeHandler={ (e) => setPhone(e.target.value) } />
                    </div>
                    <div className="form-outline mb-4">
                        <Label className="form-label" name="Password"/>
                        <Input type="password" inputChangeHandler={ (e) => setPassword(e.target.value) } />
                        { passwordError ? <span className='text-danger'>{ passwordError }</span> : ''}
                    </div>
                    <Button submitLogin={ registerHandler }  btnName="Register" />
                </form>
            </div>
        </div>
    )
}

export default Register;