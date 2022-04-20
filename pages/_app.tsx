import type { AppProps } from 'next/app'
import React, { useState } from 'react';
import ListContext from './components/List-context';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [toDoList, setToDoList] = useState<Array<{ key?: number, value?: string }>>([]);
  const [value, setValue] = useState<string>('');
  const [key, setKey] = useState<number>(0);
  const [action, setAction] = useState<string>('ADD');

  return (<ListContext.Provider value={{ action, setAction, value, setValue, key, setKey, toDoList, setToDoList }}>
    <Component {...pageProps} />
  </ListContext.Provider>)

}

export default MyApp
