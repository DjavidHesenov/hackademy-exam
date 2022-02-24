import search from "../img/search.png";
import profileIcon from "../img/ProfileL.png";

const TodoRight: React.FC = () => {

  return (
    <div className="rightSide w-[82%] h-screen ">
      <div className="upper flex items-center justify-between border-b-[1px] border-[#E5E7EB]">
        <div className="searchBar h-[6.5%] w-[35%]">
          <div className="input flex items-center m-4 p-2 border-[1px] border-[#E5E7EB]">
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
          <button>
            <img src={profileIcon} alt="profileIcon" className="w-9" />
          </button>
        </div>
      </div>

      <div className="down h-[92%] w-[100%]"></div>
    </div>
  );
};

export default TodoRight;