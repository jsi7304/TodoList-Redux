import React from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import List from "../components/List";

const TodoList = () => {
    return(
        <Layout>
            <Form/>
            <List/>
        </Layout>
    )
}

export default TodoList;