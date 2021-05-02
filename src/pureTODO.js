// 순수 리덕스(javascript)만으로 구현한 toDoList입니다

import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//dispatch에 부칠 객채를 쉽게 생성
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

//reducer 생성
//action을 통해 state를 제어
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newToDo = { text: action.text, id: Date.now() };
      return [newToDo, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((item) => item.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

//sotre 생성(reducer 필요)
//reducer를 원격에서 제어
const store = createStore(reducer);

//쉽게 dispatch 해주는 함수
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(() => console.log(store.getState()));
store.subscribe(paintToDos);
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
