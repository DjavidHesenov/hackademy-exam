import React, { useState } from "react";

import logo from "../img/logo-white.png";
import goBack from "../img/next_1.png";
import globe from "../img/Vector_2.png";
import setting from "../img/Vector.png";
import cog from "../img/cog.png";
import plus from "../img/iconmonstr-plus-2_1.png";
import profile from "../img/Profile.png";
import logOut from "../img/Log_Out.png";

const TodoLeft = () => {
  const [settings, setSettings] = useState("hidden");
  const settingHandler = () => {
    if (settings === "hidden") {
      setSettings(
        "block absolute translate-x-44 -translate-y-32 p-4 bg-white w-44 rounded-md border-[1px] border-gray-200 shadow-md"
      );
    } else {
      setSettings("hidden");
    }
  };

  return (
    <div className="w-[18%] h-screen bg-yellow-300 p-5 flex flex-col justify-between">
      <div className="icon">
        <img src={logo} alt="Logo" className="w-10 h-[28px]" />
      </div>
      <div className="lists h-4/5">
        <div className="button">
          <button>
            <img src={goBack} alt="go Back" className="w-6 h-6" />
          </button>
        </div>
        <div className="items py-1">
          <button className="flex items-center">
            <img src={plus} alt="add" className="w-6 h-6" />
            <p className="ml-4 font-medium text-xl">New List</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className={settings}>
          <button className="flex items-center mb-2">
            <img src={profile} alt="profile" />
            <p className="text-gray-400 pl-4 text-xl">Profile</p>
          </button>
          <button className="flex items-center">
            <img src={logOut} alt="log out" />
            <p className="text-gray-400 pl-4 text-xl">Log out</p>
          </button>
        </div>
        <div className="options sm:px-5 md:flex justify-evenly">
          <button>
            <img src={setting} alt="set" />
          </button>
          <button>
            <img src={globe} alt="globe" />
          </button>
          <button onClick={settingHandler}>
            <img src={cog} alt="cog" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoLeft;