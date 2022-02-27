import React from 'react'
import formStyles from '../styles/Forms.module.css'
import logoYellow from '../img/logo-yellow.png'
import { useHistory } from 'react-router-dom';

const Forgot: React.FC = () => {

    const history = useHistory()

    const backHandler = () => {
        history.push('/user/signin')
    }

    const signInHandler = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
    }

    return (
        <div className={formStyles.dino_bg}>
            <form className={`${formStyles.form} filter drop-shadow-xl p-12 flex flex-col`}>
                <div className="mb-7">
                    <div className="flex items-center">
                        <img src={logoYellow} alt="logo" width="40" height="28"></img>
                        <span className={`inline-block ml-2 text-3xl font-ns text-gray-500`}>Todo</span>
                    </div>
                    <span className={`text-2xl font-roboto font-medium`}>Forgot Password</span>
                    <div className="flex flex-col">
                        <input className="border-b-2 border-b-gray mb-5 mt-5 focus:border-b-[#FDC620]" placeholder="Email" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button onClick={backHandler} className="bg-[#B8B8B8] hover:bg-gray-500 text-black py-2 px-12 text-sm">
                        Back
                    </button>
                    <button onClick={signInHandler} className="bg-[#FCD620] hover:bg-yellow-600 text-black py-2 px-10 text-sm ml-3">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Forgot