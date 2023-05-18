import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gettodos } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
const Todo = () => {
    const [todos , setTodo] = useState([]);
    const dispatch = useDispatch();
  useEffect(() => {
    
    const gettodo = async () => {
      let res = await gettodos(dispatch);
      console.log(res);
      setTodo(res.todos);
    };
  });
  return (
    <>
      <Container>
        <Containers>
          <Heading>List 1</Heading>
        </Containers>
        <Containers>
          <Heading>List 2</Heading>
        </Containers>
        <Containers>
          <Heading>List 3</Heading>
          <Options>
            <Checkbox type="checkbox"></Checkbox>
            this is checkbox
          </Options>
        </Containers>
        <Containers style={{ height: "10vh" }}>
          <Heading>Create New List</Heading>
          <CreateList></CreateList>
        </Containers>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const Containers = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  background-color: red;
  height: 50vh;
  flex-wrap: wrap;
  /* justify-content: center;
  align-items: center; */
`;
const Heading = styled.div`
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  background-color: grey;
`;
const Checkbox = styled.input`
  margin: 6px;
  line-height: normal;
  width: 25px;
  height: 25px;
  background-color: pink;
`;
const Options = styled.div`
  height: 5vh;
  width: 100%;
  background-color: #fff;
  font-size: large;
`;

const CreateList = styled.button`
  height: 40px;
  width: 40px;
`;

export default Todo;
