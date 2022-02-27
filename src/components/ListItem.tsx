import { useState } from "react";

import More from "../img/outline_more_horiz_black_24dp.png";
import TaskItem from "./TaskItem";
import TaskInfo from "./TaskInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faICursor, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
    reduxData: any
}

let dummy = [
    {
        firstList: { listName: "First List", items: ["mi", "Ye", "go"] },
    },
];

const ListItem: React.FC<Props> = ({ reduxData }) => {
    const [taskInfoOpen, setTaskInfoOpen] = useState(false);
    const [listOptions, setListOptions] = useState(false);

    return (
        <>
            {false ? (
                <div className="down justify-center items-center mt-[20%]">
                    <div className="down-no-list text-center">
                        <p className="text-[#FCD620] font-semibold">List not found</p>
                        <p className="font-medium">
                            We can't find the list you're looking for. Select one of your
                            lists from the sidebar or create a new list.
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="down flex flex-col w-[100%]">
                        <div className="card w-[100%] flex justify-start items-center p-4">
                            <h1 className="font-bold text-2xl">
                                {reduxData.name}
                            </h1>
                            <button
                                onClick={() => {
                                    setListOptions((prev) => !prev);
                                }}
                            >
                                <img src={More} alt="more" className="ml-4 w-6" />
                            </button>
                            {listOptions && (
                                <div className="listOptions flex flex-col w-[10%] absolute translate-x-1/4 translate-y-2/3 p-2 bg-white shadow-lg border-[1px] rounded-lg">
                                    <div className="Header p-2">
                                        <h1 className="text-center">List Options</h1>
                                    </div>
                                    <button className="m-1 p-2 flex justify-evenly items-center hover:bg-slate-200">
                                        <FontAwesomeIcon
                                            icon={faICursor}
                                            size="lg"
                                            className="hover:text-gray-700 cursor-pointer focus:outline-none"
                                        />
                                        <p
                                            onClick={() => {
                                                setTaskInfoOpen((prev) => !prev);
                                            }} >Rename List
                                        </p>
                                    </button>
                                    <button className="m-1 p-2 flex justify-evenly items-center text-red-500 bg-red-50 hover:bg-red-200">
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            size="lg"
                                            className="hover:text-gray-700 cursor-pointer focus:outline-none"
                                        />
                                        <p>Delete List</p>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="card w-[100%] p-2 border-b text-2xl text-yellow-300">
                            <button>+ Add a task</button>
                        </div>
                        <div className="down-cols">
                            {dummy[0]["firstList"]["items"].map((item, i) => {
                                return <TaskItem item={item} key={i++} />;
                            })}
                        </div>
                    </div>
                    {taskInfoOpen && <TaskInfo />}
                </>
            )}
        </>
    );
};

export default ListItem;