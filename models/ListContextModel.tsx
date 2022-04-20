import { Dispatch, SetStateAction } from "react";

export default interface IToDoList {
    toDoList?: Array<{ key?: number, value?: string }>,
    setToDoList?: Dispatch<SetStateAction<Array<{ key?: number, value?: string }>>> | null,
    action?: string,
    setAction?: Dispatch<SetStateAction<string>> | null,
    value?: string,
    setValue?: Dispatch<SetStateAction<string>> | null,
    key?: number,
    setKey?: Dispatch<SetStateAction<number>> | null,
}
