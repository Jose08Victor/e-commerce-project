import { useState } from 'react'
import './styles.css'

export const LoginSignUp = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function checkInputEmail() {
        if (formData.email === "") {
            alert("O email é obrigatório.");
        } else if (!isEmailvalid(formData.email)) {
            alert("O email precisa ser válido.");
        } else {
            return true
        }
    }

    function isEmailvalid(email: string) {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if (emailRegex.test(email)) return true;
    }

    function checkInputPassword() {
        if (formData.password === "") {
            alert("A senha é obrigatória.");
        } else if (formData.password.length < 8) {
            alert("A senha precisa ter no mínimo 8 caracteres.");
        } else {
            return true;
        }
    }

    const login = async () => {
        if (checkInputEmail() && checkInputEmail()) {
            let responseData;

            await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => responseData = data)

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/');
            } else {
                alert(responseData.errors)
            }
        }
    }

    const signup = async () => {
        if (checkInputEmail() && checkInputPassword()) {
            let responseData;

            await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => responseData = data)

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/');
            } else {
                alert(responseData.errors)
            }
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' /> : <></>}

                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />

                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>

                <bu8tton onClick={() => { state === "Login" ? login() : signup() }}>Continue</bu8tton>

                {state === "Sign Up" ? <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Login")}>Login Here</span></p> : <p className='loginsignup-login'>Create an account : <span onClick={() => setState("Sign Up")}>Click Here</span></p>}

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}