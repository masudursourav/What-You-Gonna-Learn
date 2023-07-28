import Card from "./Shared/Card";
import { FaTimes } from "react-icons/fa"
/* eslint-disable react/prop-types */
const TaskItem = ({ item, handleDelete }) => {
    return (
        <>
         <Card>
          <div className="num-display">{item.rating}</div>
          <button className="close" onClick={()=>handleDelete(item.id)}>
            <FaTimes color="red" />
          </button>
          <div className="text-display">
           {item.text}
           </div>  
        </Card>   
        </>
    );
};

export default TaskItem;