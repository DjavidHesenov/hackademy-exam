import { useEffect, useState } from "react";
import TodoLeft from "../components/TodoLeft";
import TodoRight from "../components/TodoRight";
import { loadListHeads } from '../api/lists'
import axios from '../api/axios';
import { setUpBearerHeader } from '../api/auth';

const Todo: React.FC = () => {
  const [data, setData] = useState([])
  async function fetchData() {
    const response = await loadListHeads();
    setData(response?.data)
    if (response.status === 200) {
      // dispatch({ type: 'set', listHeads: response.data })
      setUpBearerHeader(axios);
      console.log("Authorized. ", response.data);
    } else {
      if (response.status === 401) {
        console.log("Unauthorized! Removing jwt from memory.");
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex">
      <TodoLeft data={data} fetchData={fetchData} />
      <TodoRight />
    </div>
  );
};

export default Todo;