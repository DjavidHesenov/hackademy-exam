const TaskInfo: React.FC = () => {
    return (
        <div className="w-[30%] bg-[#FCD620] flex flex-col justify-between">
            <div className="item-top h-[50%] p-2">
                <div className="item-top__top bg-white mb-2">
                    <button>asd</button>
                    <input className="p-3 bg-gray-200"/>
                </div>
                <div className="item-top__bottom h-[50%]">
                    <input className="p-3 w-[100%] h-[100%]" placeholder="Description" />
                </div>
            </div>
            <div className="item-bottom p-2">
                Created on Fri, October 15
            </div>
        </div>
    );
};

export default TaskInfo;