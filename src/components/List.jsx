import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";
import Todo from './Todo'

const List = () => {
    const todos = useSelector((state) => state.todos)

    return (
        <StListContainer>
            <StTitle>working.. π₯</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === false ? (
                            <Todo
                                todo={todo}
                                /*λΆνμν λ¦¬λ λλ§μ λ°©μ§νκΈ° μν΄μλ
                                κ° μμ μ»΄ν¬λνΈλ§λ€ λλ¦½μ μΈ keyκ°μ λ£μ΄μ€μΌ νλ€.*/  
                                key={todo.id} 
                            />
                    ) : null
                )}

            </StListCard>
            <StTitle>Done..! π</StTitle>
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