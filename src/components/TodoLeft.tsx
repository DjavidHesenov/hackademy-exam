import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../img/logo-white.png";
import globe from "../img/Vector_2.png";
import setting from "../img/Vector.png";
import cog from "../img/cog.png";
import profile from "../img/Profile.png";
import logOut from "../img/Log_Out.png";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import hambMenu from '../img/hamb-menu.png'
import trash from '../img/trash.png'

const TodoLeft: React.FC = () => {
  const [settings, setSettings] = useState("hidden");
  const [addItem, setAddItem] = useState("New List");
  const [onFocus, setOnFocus] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState<any>([]);

  const history = useHistory()

  const logoutHandler = () => {
    history.push("/user/signin")
  }

  const settingHandler = () => {
    if (settings === "hidden") {
      setSettings(
        "block flex flex-col absolute translate-x-2/3 -translate-y-[120%] bg-white w-[11%] rounded-md border-[1px] border-gray-200 shadow-md"
      );
    } else {
      setSettings("hidden");
    }
  };

  const listInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddItem(event.target.value);
  };

  const focusHandler = () => {
    setOnFocus(true);
  };

  const deleteHandler = (e: any) => {
    // setIsListEmpty(isListEmpty.filter((x: any) => x[e.target.id] !== x[e.target.id] ))
    setIsListEmpty((
      isListEmpty.filter((x: any) => {
        let item = isListEmpty[e.target.id]
        return x !== item
      })
    ))
  };


  return (
    <div className="w-[18%] h-screen bg-[#FCD620] p-5 flex flex-col justify-between">
      <div className="icon">
        <img src={logo} alt="Logo" className="w-10 h-[28px]" />
      </div>
      <div className="lists h-4/5 flex flex-col relative">
        <div className="button">
          <button>
            <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
          </button>
        </div>
        {
          isListEmpty ? isListEmpty.map((item: any, i: any) => {
            return (
              <div key={i}>
                <div className="p-1 pr-1 my-1 w-[75%] text-slate-900 font-medium text-xl rounded-md bg-[#FCD620] hover:bg-white flex justify-between items-center">
                  <div className="flex">
                    <img src={hambMenu} width="24px" alt="Hamb" className="mr-4" />
                    {item}
                  </div>
                  <div onClick={(e) => deleteHandler(e)}>
                    <img src={trash} id={i} width="24px" alt="Trash" className="ml-[20%] hover:bg-red-500 rounded cursor-pointer" />
                  </div>
                </div>
              </div>
            )
          }) : ""
        }
        <div className="items py-1 ">
          <div
            className={
              "flex items-center " + (onFocus ? "bg-white " : "bg-[#FCD620]")
            }
            onFocus={focusHandler}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setOnFocus(false);
                setAddItem("New List");
              }
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="w-6 h-6" />

            <input
              type="text"
              value={addItem}
              className="ml-2 p-1 w-[75%] text-slate-900 font-medium text-xl rounded-md bg-[#FCD620] focus:bg-white "
              onChange={listInputChangeHandler}
            />
            {onFocus && (
              <button
                className="font-medium text-xl text-[#FCD620]"
                onClick={() => {
                  setIsListEmpty((prevObj: any) => [...prevObj, addItem])
                  setAddItem("New List");
                  setOnFocus(false);
                }}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className={settings}>
          <button className="flex items-center mb-2 p-2 hover:bg-slate-200 cursor-pointer">
            <img src={profile} alt="profile" />
            <p className="text-gray-400 pl-4 text-xl">Profile</p>
          </button>
          <button onClick={logoutHandler} className="flex items-center p-2 hover:bg-slate-200 cursor-pointer">
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