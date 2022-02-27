import React, { useState, useEffect } from 'react'
import formStyles from '../styles/Forms.module.css'
import logoYellow from '../img/logo-yellow.png'
import { useHistory } from 'react-router-dom';
import isAuthenticated, { signUp } from '../api/auth'

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    useEffect(() => { isAuthenticated() && history.push('/todo/lists') })

    const history = useHistory()

    const backHandler = () => {
        history.push('/user/signin')
    }

    const signUpHandler = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (email === "" || password === "" || passwordConfirm === "") {
            return
        }
        const response = await signUp(email, password)
        if (response) {
            history.push('/todo/lists')
        } else {
            return
        }
    }

    return (

        <div className={formStyles.dino_bg}>
            <form className={`${formStyles.form} filter drop-shadow-xl p-12 flex flex-col`}>
                <div className="mb-7">
                    <div className="flex items-center">
                        <img src={logoYellow} alt="logo" width="40" height="28"></img>
                        <span className={`inline-block ml-2 text-3xl font-ns text-gray-500`}>Todo</span>
                    </div>
                    <span className={`text-2xl font-roboto font-medium`}>Sign Up</span>
                    <div className="flex flex-col">
                        <input className="border-b-2 border-b-gray mb-5 mt-5 focus:border-b-[#FDC620]" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input className="border-b-2 outline-b-gray-300 mb-5 focus:border-b-[#FDC620]" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <input className="border-b-2 outline-b-gray-300 focus:border-b-[#FDC620]" type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                        <br />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button onClick={backHandler} className="bg-[#B8B8B8] hover:bg-gray-500 text-black py-2 px-12 text-sm">
                        Back
                    </button>
                    <button className="bg-[#FCD620] hover:bg-yellow-600 text-black py-2 px-10 text-sm ml-3"
                        onClick={(e) => signUpHandler(e)}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp