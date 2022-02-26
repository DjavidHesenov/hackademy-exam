import search from "../img/search.png";
import ListItems from "./ListItem";
import Profile from './Profile'

const TodoRight: React.FC = () => {
    return (
        <div className="rightSide w-[82%] h-[100%]">
            <div className="upper flex items-center justify-between border-b-[1px] border-[#E5E7EB]">
                <div className="searchBar h-[6.5%] w-[35%]">
                    <div className="input flex items-center m-2 p-2 border-[1px] border-[#E5E7EB]">
                        <button>
                            <img src={search} alt="search" className="w-6" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-2 text-lg text-gray-600 w-[100%]"
                        />
                    </div>
                </div>
                <div className="profile mr-4">
                    <Profile />
                </div>
            </div>
            <div className={true ? "down" : "down justify-center items-center mt-[20%]"}>
                {
                    true ?
                        <ListItems />
                        :
                        (
                            <div className="down-no-list text-center">
                                <p className="text-[#FCD620] font-semibold">List not found</p>
                                <p className="font-medium">We can't find the list you're looking for. Select one of your lists from the sidebar or create a new list.</p>
                            </div>
                        )

                }
            </div>
        </div>
    );
};

export default TodoRight;
