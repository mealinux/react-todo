import { createContext } from "react";
import IToDoList from "../models/List-context-model";

const ListContext = createContext<IToDoList | null>(null);

export default ListContext;