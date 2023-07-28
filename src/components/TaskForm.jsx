/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
const TaskForm = ({handleAdd}) => {
    const [text, setText] = useState("");
    const [rating,setRating] = useState(1);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        if(text === ''){
            setBtnDisabled(true);
            setMessage("");
        }
        else if(text !=='' && text.length<=10){
            setMessage("Text must be at least 10 characters");
        }
        else{
            setMessage("");
            setBtnDisabled(false);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length){
            const newTask = {
                text,
                rating,
            };
            handleAdd(newTask);
            setText("");
        }
    }
    return (
        <>
            <Card>
                <form onSubmit={handleSubmit}>
                <h2>Set Task Priority</h2>
                <RatingSelect select =  {(rating)=> setRating(rating)} />
                <div className="input-group">
                    <input type="text" value={text} onChange={handleChange} placeholder="Write What You Gonna Do" />
                    <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div> }
                </form>
            </Card>
        </>
    );
};

export default TaskForm;