import TodoLeft from "../components/TodoLeft";
import TodoRight from "../components/TodoRight";

const Todo: React.FC = () => {
  return (
    <div className="flex">
      <TodoLeft />
      <TodoRight />
    </div>
  );
};

export default Todo;