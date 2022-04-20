import React, { useContext } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEdit, FaTrash } from "react-icons/fa";
import ListContext from '../components/List-context';
import IToDoList from '../models/List-context-model';

const TodoElement = (props: { data: { value?: string; key?: number; }; }) => {
    const toDoModel = useContext<IToDoList | null>(ListContext);

    const getData = (key: any) => {
        return toDoModel!.toDoList!.filter((data: { key?: number; }, index: number) =>
            data.key === key
        )[0];
    }

    const editClick = (key?: number) => {

        const changableValue = getData(key);

        toDoModel!.setKey!(changableValue!.key!);
        toDoModel!.setValue!(changableValue!.value!);

        toDoModel!.setAction!('UPDATE')
    }

    const deleteClick = (key?: number) => {
        let newList: Array<{ key?: number, value?: string }> = [];

        newList = toDoModel!.toDoList!.filter((data: { key?: number; }) => data.key != key);

        toDoModel!.setToDoList!(newList);
    }

    return <InputGroup className='inputs' size='sm'>
        <Form.Control
            placeholder='to do'
            value={props.data.value}
            type="text"
            readOnly
        />
        <Button variant='warning' onClick={() => editClick(props.data.key)}><FaEdit /></Button>
        <Button variant='danger' onClick={() => deleteClick(props.data.key)}><FaTrash /></Button>
    </InputGroup>;
}




export default TodoElement;