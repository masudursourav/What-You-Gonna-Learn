import TaskItem from "./TaskItem";
import { motion, AnimatePresence } from "framer-motion"
/* eslint-disable react/prop-types */
const TaskList = ({task, handleDelete}) => {
    return (
        <>
        
          <div className="task-list">
          <AnimatePresence>
          {
            task.map((item) => 
            <motion.div key = {item.id}
            initial={{opacity: 0}}
            animate = {{opacity:1}}
            exit={{opacity: 0}}
            >
            <TaskItem key = {item.id} item={item} handleDelete = {handleDelete} />
            </motion.div>
            )
          }  
          </AnimatePresence>
          </div>  
        </>
    );
};

export default TaskList;