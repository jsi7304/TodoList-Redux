import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoDetail from "../pages/TodoDetail"
import TodoList from "../pages/TodoList";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoList/>} />
                <Route path='detail/:id' element={<TodoDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;