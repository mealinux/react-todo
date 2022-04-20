import { createContext } from "react";
import IToDoList from "../models/ListContextModel";

const ListContext = createContext<IToDoList | null>(null);

export default ListContext;