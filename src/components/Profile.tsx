import profileIcon from "../img/ProfileL.png";
import { useState } from "react";
import logoYellow from "../img/logo-yellow.png";
import Notification from "../img/Notification_Icon.png";
import { signOut } from "../api/auth";
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
    const [profile, setProfile] = useState(false);

    const history = useHistory()

    return (
        <>
            <button
                onClick={() => {
                    setProfile(prevState => !prevState);
                }}
            >
                <img src={profileIcon} alt="profileIcon" className="w-9" />
            </button>
            {profile && (
                <div className="absolute -translate-x-[90%] translate-y-[8%] w-[18%] shadow-lg bg-white p-5">
                    <div className="flex justify-between items-center">
                        <div className="logo flex items-center">
                            <img src={logoYellow} alt="logo" className="w-6 mr-1" />
                            <p className="text-[#797979] font-medium text-xl">Todo</p>
                        </div>
                        <button className="text-[#B8B8B8] hover:underline text-md" onClick={() => {signOut(); history.push('/user/signin')}} >Sign out</button>
                    </div>

                    <div className="flex mt-3 justify-between items-start">
                        <div className="picture">
                            <img src={Notification} alt="pp" />
                        </div>
                        <div className="profileInfo">
                            <p>{localStorage.getItem("email")}</p>
                            <button className="text-yellow-300 hover:underline">
                                My Profile
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;