import elips from "../img/Ellipse_1.png";
import selected from "../img/Group_7_1.png";
import { useState } from "react";

interface IRecipeProps {
    item?: any;
    i?: any;
}

const ListItem: React.FC<IRecipeProps> = ({ item }) => {
    const [select, setSelect] = useState(true);
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
                    {item}
                </h1>
            </button>
        </div>
    );
};

export default ListItem;