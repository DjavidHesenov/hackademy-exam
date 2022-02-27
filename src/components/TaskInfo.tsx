import { faChevronRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import elips from "../img/Ellipse_1.png";
import selected from "../img/Group_7_1.png";
import { useSelector } from "react-redux";

const TaskInfo: React.FC = () => {
    const reduxData = useSelector((state: any) => state.data.data)
    return (
        <div className="w-[30%] bg-[#FCD620] flex flex-col justify-between">
            <div className="item-top h-[50%] p-2">
                <div className="item-top__top bg-white mb-2 flex items-center pl-3">
                    {!true ? (
                        <img
                            src={elips}
                            alt="check"
                            className="border-[1px] rounded-full border-[#FDC620] "
                        />
                    ) : (
                        <img src={selected} alt="selected" />
                    )}
                    <input onBlur={() => console.log('sex')} className="p-3 font-medium" value={reduxData?.name}/>
                </div>
                <div className="item-top__bottom h-[70%]">
                    <textarea className="p-3 w-[100%] h-[100%] resize-none outline-none" placeholder="Description" />
                </div>
            </div>
            <div className="item-bottom p-2 flex justify-between">
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-5 h-5 min-w-max"
                />
                <span>Created on Fri, October 15</span>
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="w-5 h-5 hover:bg-red-500 rounded cursor-pointer"
                />
            </div>
        </div>
    );
};

export default TaskInfo;