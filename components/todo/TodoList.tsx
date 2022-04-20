import TodoElement from "./TodoElement"
import ListContext from "../ListContext";
import React, { useContext } from "react";
import IToDoList from "../../models/ListContextModel";

const TodoList = () => {
    const toDoModel = useContext<IToDoList | null>(ListContext);

    return (
        <>
            {
                toDoModel!.toDoList! && toDoModel!.toDoList!.map((data, index) => {
                    return <div className='to-do-list' key={index}>
                        <TodoElement data={data} />
                    </div>
                })
            }
        </>
    );

}


export default TodoList; 