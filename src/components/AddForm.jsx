import React from "react";
import { useState } from "react";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todoData = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const submitBtnHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: shortid.generate(),
      title: title,
      body: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    console.log("등록된 todo 목록", todoData);
  };

  return (
    <form onSubmit={submitBtnHandler}>
      제목:
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      내용:
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button type="submit">등록하기</button>
    </form>
  );
}

export default AddForm;
