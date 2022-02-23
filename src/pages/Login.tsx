import React from 'react'
import formStyles from '../styles/Forms.module.css'

const Login: React.FC = () => {
    return (
        <div className={formStyles.dino_bg}>
            <form className={`${formStyles.form} filter drop-shadow-xl p-12`}>
                <div className="mb-7">
                    <img src="../../public/img/logo-yellow.png" alt="openware yellow logo" width={40} height={28} />
                    <span className={`inline-block ml-2 text-3xl font-ns text-gray-500 mb-2`}>Todo</span>
                    <br />
                    <span className={`text-2xl font-roboto font-medium`}>{`title`}</span>
                </div>
            </form>
        </div>
    )
}

export default Login