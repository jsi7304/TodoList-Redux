import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";


const TodoDetail = () => {
    const param = useParams();
    const navigate = useNavigate();

    const todos = useSelector((state) => state.todos);
    const detailTodo = todos.find((todo) => parseInt(todo.id) === parseInt(param.id))
    /*todo.id와 param.id가 같은 것만 추출하는 이유=> page1에서는 id1이 나와야 하니까
    연결해주는 것.  연결해주지 않으면 page1에서는 어떤걸 뿌려야할지 모르기 때문에 아무것도 뜨지않음*/
    // const detailTodo = todos.find((val) => Number(val.id) === Number(param.id))
    // console.log(detailTodo)

    return (
      <StBackground>
        <StTodoDetailContainer>
            <StDetailTop>
                <StTodoId>ID : {detailTodo.id} </StTodoId>
                <StButton
                    onClick={() => navigate(-1)} //navigate(-1)=> 뒤로가기 
                >이전으로</StButton>
            </StDetailTop>
            <StTitle>{detailTodo.title}</StTitle>
            <StContent>{detailTodo.content}</StContent>

        </StTodoDetailContainer>
        </StBackground>
    )

}

export default TodoDetail;

const StBackground = styled.div `
height:90vh;
 display:flex; 
`

const StTodoDetailContainer = styled.div`
    border: 1px solid skyblue;
    width: 600px;
    height: 400px;
    margin: 25vh auto;
    
`

const StDetailTop = styled.div`
    display: flex;
    justify-content: space-between
`
const StTodoId = styled.div`
margin-top:15px;   
margin-left:15px; 
`
const StButton = styled.div`   
display:flex; 
margin-top:15px;
margin-right:15px;
border:solid 1px;
border-color:skyblue;
border-radius:10px;
&:hover{  
    background-color : skyblue;
    color : white  
  }
width:100px;
height:30px;
align-items:center;
justify-content:center;

`
const StTitle = styled.div`
margin-top:50px;
margin-left:15px;
font-weight:600;
font-size:50px;
`
const StContent = styled.div`
margin-top:10px;
margin-left:20px;
font-size:30px;    
`