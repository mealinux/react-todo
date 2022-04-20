import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { FaPlusCircle, FaSync } from "react-icons/fa";
import React, { useContext } from 'react';
import ListContext from '../components/List-context';
import IToDoList from '../models/List-context-model';


const Todoadd = () => {
    const toDoModel = useContext<IToDoList | null>(ListContext);


    const handleChange = (event: { target: { value: string; }; }) => {
        if (toDoModel?.action == 'ADD') {
            const keyId = Math.floor(Math.random() * 23423423);
            toDoModel!.setKey!(keyId);
        }

        toDoModel!.setValue!(event.target.value);
    }

    const fillTodoList = (data: { key?: number; value?: string; }) => {

        toDoModel!.setToDoList!([...toDoModel?.toDoList!, data]);


        toDoModel!.setAction!('ADD')
        toDoModel!.setValue!('');
        toDoModel!.setKey!(0);
    }

    const updateTodoList = (todo: { key?: number; value?: string; }) => {

        toDoModel!.setValue!(todo.value!);
        toDoModel!.setKey!(todo.key!);
        let dataIndex: number;

        dataIndex = toDoModel!.toDoList!.findIndex(data => data.key == todo.key);

        toDoModel!.toDoList![dataIndex].value = todo.value!;

        toDoModel!.setToDoList!(toDoModel!.toDoList!);
        toDoModel!.setAction!('ADD')
        toDoModel!.setValue!('');
        toDoModel!.setKey!(0);
    }

    return (
        <Row>
            <Col md="11">
                <FloatingLabel
                    controlId="floatingInput"
                    label="to do"
                >

                    <Form.Control type="text" value={toDoModel!.value} placeholder="to do" onChange={(event: any) => handleChange(event)} />
                </FloatingLabel>
            </Col>
            <Col md="1" className='include-buttons'>
                <Button variant={toDoModel?.action == 'ADD' ? 'success' : 'warning'} onClick={() => toDoModel?.action == 'ADD' ? fillTodoList({ key: toDoModel!.key, value: toDoModel!.value }) : updateTodoList({ key: toDoModel!.key, value: toDoModel!.value })}>{toDoModel!.action == 'ADD' ? <FaPlusCircle /> : <FaSync />}</Button>
            </Col>
        </Row >
    );
}


export default Todoadd;
