import More from "../img/png.png";
import elips from "../img/Ellipse 1.png";
import selected from "../img/Group 7 (1).png";
import { useState } from "react";

let dummy = [
    {
        firstList: { listName: "First List", items: ["mi", "Ye", "go"] },
    },
];

const ListItem: React.FC = () => {
    const [select, setSelect] = useState(true);
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
                <div className="down flex flex-col">
                    <div className="card w-[100%] flex justify-start items-center m-4">
                        <h1 className="font-bold text-2xl">
                            {dummy[0]["firstList"]["listName"]}
                        </h1>
                        <button>
                            <img src={More} alt="more" className="ml-4 w-6" />
                        </button>
                    </div>

                    <div className="card w-[100%] p-2 border-b text-2xl text-yellow-300">
                        <button>+ Add a task</button>
                    </div>

                    <div className="down-cols">
                        {dummy[0]["firstList"]["items"].map((key) => {
                            return (
                                <div className="card w-[100%] border-b text-2xl">
                                    <button
                                        className="w-[100%] p-2 flex items-center align-middle"
                                        onClick={() => {
                                            if (select) {
                                                setSelect(false);
                                            } else {
                                                setSelect(true);
                                            }
                                        }}
                                    >
                                        {!select ? (
                                            <img
                                                src={elips}
                                                alt="check"
                                                className="border-[1px] rounded-full border-[#FDC620] "
                                            />
                                        ) : (
                                            <img src={selected} alt="selected" />
                                        )}

                                        <h1 className={"ml-4 " + (select && "line-through	")}>
                                            {key}
                                        </h1>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListItem;