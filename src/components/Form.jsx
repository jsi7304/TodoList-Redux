import React, { useState, useRef } from "react"
import {useDispatch} from "react-redux"
import styled from "styled-components"
import { addTodo } from "../redux/modules/todos"

const Form = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputContent = (e) => {
        setContent(e.target.value)
    }

    const nextId = useRef(0)
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if (title === '' || content === '') return;
        
        dispatch(
            addTodo({
                id: (nextId.current += 1),
                title,
                content,
                isDone : false,
            })
        );
        setTitle('')
        setContent('')
    };

    return (
        <StFormContainer onSubmit={onSubmitHandler}>
            <label><h4>제목</h4></label>
            <StInput type="text" value={title} onChange={handleInputTitle}></StInput>
            <label><h4>내용</h4></label>
            <StInput type="text" value={content} onChange={handleInputContent}></StInput>
            <StButton>추가하기</StButton>
        </StFormContainer>
    )

}

const StFormContainer = styled.form`

  display: flex;
  background-color: #eee;
  align-items: center;
  justify-content: space-between;
  padding:20px;
  margin-top:20px;
  border-radius: 10px;
`;

const StInput = styled.input`
border: 1px solid #b0e0e6;
margin: 0 24px;
height: 25px;
width: 300px;
height:40px;
border-radius: 8px;
outline: none;
padding: 0 10px;
border-color:skyblue;
`;

const StButton = styled.button`
border: 1px solid #b0e0e6;
background-color: #fff;
height: 50px;
cursor: pointer;
width: 150px;
border-radius: 8px;
&:hover {
background-color: skyblue;
color:white
}
border-color:skyblue;
`;

export default Form;