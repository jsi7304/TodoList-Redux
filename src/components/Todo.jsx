import React from "react";
import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, doneTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    // const navigate = useNavigate()

    return (
        <StTodoContainer>
            <Link to={`/detail/${todo.id}`}><Linkdetail>상세보기</Linkdetail></Link>
            {/*${todo.id} => todo의 id와 동일한 페이지 넘버로 이동하기 위함 */}
            {/* <p onClick={() => navigate(`/detail/${todo.id}`)}>상세보기</p> */}
            <StTodoTitle>{todo.title}</StTodoTitle>
            <StTodoContent>{todo.content}</StTodoContent>
            <StTodobuttonsContainer>
                <StTodobuttons
                    onClick={() => {
                        if(window.confirm('삭제하시겠습니까?')){
                            dispatch(deleteTodo(todo.id))
                        }
                        
                    }}>삭제하기</StTodobuttons>
                <StTodobuttons
                    onClick={() => {
                        dispatch(doneTodo(todo.id))
                    }}>
                    {todo.isDone === true ? "취소" : "완료"}
                </StTodobuttons>
            </StTodobuttonsContainer>
        </StTodoContainer>
    );
};

const StTodoContainer = styled.div`
display: flex;
flex-direction:column;
gap: 12px;
margin-top: 5px;
width: 300px;
padding: 30px;
border: 3px solid #b0e0e6;
border-radius: 8px;
background-color: #fff;
`;

const Linkdetail = styled.div`
color:black;
&:hover{  
    color : skyblue;  
  }
`

const StTodoTitle = styled.div`
font-size:20px;
font-weight:bold;
`;
const StTodoContent = styled.div`
`;
const StTodobuttonsContainer = styled.span`
display: flex;
flex-direction:row;
justify-content: space-between;

`;
const StTodobuttons = styled.span`
border:solid 2px;
border-color:skyblue;
border-radius:10px;
width:120px;
height:3vh;
margin-top:20px;
&:hover{  
    background-color : skyblue;
    color : white  
  }
  text-align:center;
  line-height:3vh;
`

export default Todo;
