import React from 'react'
import formStyles from '../styles/Forms.module.css'
import logoYellow from '../img/logo-yellow.png'
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {

    const history = useHistory()
    
    const createHandler = () => {
        history.push('/user/signup')
    }

    const forgotHandler = () => {
        history.push('/user/forgot')
    }

    return (
        <div className={formStyles.dino_bg}>
            <form className={`${formStyles.form} filter drop-shadow-xl p-12 flex flex-col`}>
                <div className="mb-7">
                    <div className="flex items-center">
                        <img src={logoYellow} alt="logo" width="40" height="28"></img>
                        <span className={`inline-block ml-2 text-3xl font-ns text-gray-500`}>Todo</span>
                    </div>
                    <span className={`text-2xl font-roboto font-medium`}>Sign In</span>
                    <div className="flex flex-col">
                        <input className="border-b-2 border-b-gray mb-5 mt-5 focus:border-b-[#FDC620]" placeholder="Email" />
                        <input className="border-b-2 outline-b-gray-300 focus:border-b-[#FDC620]" placeholder="Password" />
                    </div>
                    <span className={`text-sm font-roboto font-medium`}>No account?</span>
                    <span onClick={createHandler} className={`text-sm font-roboto text-[#FCD620] pl-2 hover:underline cursor-pointer `}>Create one!</span>
                    <br />
                    <span onClick={forgotHandler} className={`text-sm font-roboto font-medium hover:underline cursor-pointer`}>Forgot password?</span>
                </div>
                <div className="flex justify-end">
                    <button className="bg-[#FCD620] hover:bg-yellow-600 text-black py-2 px-10 text-sm">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn