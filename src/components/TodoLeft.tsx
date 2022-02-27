import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import logo from "../img/logo-white.png";
import globe from "../img/globe.png";
import setting from "../img/adjustments.png";
import cog from "../img/cog.png";
import profile from "../img/Profile.png";
import logOut from "../img/Log_Out.png";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import hambMenu from "../img/hamb-menu.png";
import { signOut } from "../api/auth";
import { createList, deleteList } from '../api/lists'
import { useDispatch } from 'react-redux'
import { dataActions } from '../store/auth'

interface Props {
  data: any,
  fetchData: any
}

const TodoLeft: React.FC<Props> = ({ data, fetchData }) => {

  const dispatch = useDispatch()

  const [open, setOpen] = useState(true);
  const [settings, setSettings] = useState("hidden");
  const [addItem, setAddItem] = useState("New List");
  const [onFocus, setOnFocus] = useState(false);
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    setFetchedData(data)
  }, [data])

  const history = useHistory();

  const logoutHandler = () => {
    signOut();
    history.push('/user/signin')
  };

  const settingHandler = () => {
    if (settings === "hidden") {
      setSettings(
        `block flex flex-col absolute ${open
          ? "translate-x-2/3 -translate-y-[120%]"
          : "translate-x-1/3 -translate-y-[20%]"
        } bg-white w-[11%] rounded-md border-[1px] border-gray-200 shadow-md`
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

  return (
    <div
      className={`${!open ? "w-[6%]" : "w-[18%]"
        } h-screen bg-[#FCD620] p-5 flex flex-col justify-between ${!open && "items-center"
        }`}
    >
      <div className="icon">
        <img src={logo} alt="Logo" className="w-10 h-[28px] min-w-max" />
      </div>
      <div
        className={`lists ${open ? "h-4/5" : "h-[70%]"
          } flex flex-col relative `}
      >
        <div className="button">
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            {open ? (
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="w-6 h-6 min-w-max"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-6 h-6 min-w-max"
              />
            )}
          </button>
        </div>
        {fetchedData
          ? fetchedData?.map((data: any) => {
            return (
              <div key={data.id}>

                <div onClick={() => { dispatch(dataActions.setData(data)) }} className="p-1 pr-1 my-1 w-[75%] text-slate-900 font-medium text-xl rounded-md bg-[#FCD620] hover:bg-white cursor-pointer flex justify-between items-center">
                  <div className="flex items-center ">
                    <img
                      src={hambMenu}
                      width="24px"
                      alt="Hamb"
                      className="mr-4 min-w-[24px] max-h-[28px] fill-black"
                    />
                    {open && data.name}
                  </div>
                  {open && (
                    <div onClick={() => { deleteList(data.id); fetchData() }}>
                      <FontAwesomeIcon
                        id={data.id}
                        icon={faTrashAlt}
                        className="ml-[20%] hover:bg-red-500 rounded cursor-pointer min-w-[20px] min-h-[20px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })
          : ""}
        <div className="items py-1 pl-1">
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
            <FontAwesomeIcon icon={faPlus} className="w-6 h-6 min-w-max" />

            {open && (
              <input
                type="text"
                value={addItem}
                className="ml-2 p-1 w-[75%] text-slate-900 font-medium text-xl rounded-md bg-[#FCD620] focus:bg-white "
                onChange={listInputChangeHandler}
              />
            )}
            {onFocus && (
              <button
                className="font-medium text-xl text-[#FCD620]"
                onClick={async () => {
                  const listHead = await createList(addItem);
                  console.log('head', listHead)
                  // setIsListEmpty((prevObj: any) => [...prevObj, addItem]);
                  setAddItem("New List");
                  setOnFocus(false);
                  fetchData()
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
            <img src={profile} alt="profile " className="min-w-max" />
            <p className="text-gray-400 pl-4 text-xl">Profile</p>
          </button>
          <button
            onClick={logoutHandler}
            className="flex items-center p-2 hover:bg-slate-200 cursor-pointer"
          >
            <img src={logOut} alt="log out" className="min-w-max" />
            <p className="text-gray-400 pl-4 text-xl">Log out</p>
          </button>
        </div>
        <div
          className={`options ${open
            ? "sm:px-5 md:flex justify-evenly"
            : "flex flex-col items-center"
            }`}
        >
          <button>
            <img src={setting} alt="set" className="my-2 min-w-max" />
          </button>
          <button>
            <img src={globe} alt="globe" className="my-2 min-w-max" />
          </button>
          <button onClick={settingHandler}>
            <img src={cog} alt="cog" className="my-2 min-w-max" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoLeft;