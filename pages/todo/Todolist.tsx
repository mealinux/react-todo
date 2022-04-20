import TodoElement from "./Todo-element"
import ListContext from "../components/List-context";
import React, { useContext } from "react";
import IToDoList from "../models/List-context-model";

const Todolist = () => {
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


export default Todolist; 