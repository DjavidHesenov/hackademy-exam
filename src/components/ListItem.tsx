import More from "../img/png.png";
import TaskItem from './TaskItem'

let dummy = [
    {
        firstList: { listName: "First List", items: ["mi", "Ye", "go"] },
    }
];

const ListItem: React.FC = () => {
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
                    <div className="card w-[100%] flex justify-start items-center p-4">
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
                        {dummy[0]["firstList"]["items"].map((item, i) => {
                            return (
                                <TaskItem item={item} key={i++} />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListItem;