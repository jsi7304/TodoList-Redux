import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";
import Todo from './Todo'

const List = () => {
    const todos = useSelector((state) => state.todos)

    return (
        <StListContainer>
            <StTitle>working.. 🔥</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === false ? (
                            <Todo
                                todo={todo}
                                /*불필요한 리렌더링을 방지하기 위해서는
                                각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.*/  
                                key={todo.id} 
                            />
                    ) : null
                )}

            </StListCard>
            <StTitle>Done..! 🎉</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === true ? (
                            <Todo
                                todo={todo}
                                key={todo.id}
                            />
                    ) : null
                )}
                
            </StListCard>

        </StListContainer>
    )
}

const StListContainer = styled.div`
    /* border: 1px solid #ddd;
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px; */
`

const StTitle = styled.h1`
    font-weight: bold;
    margin: 20px;
`

const StListCard = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`


export default List;