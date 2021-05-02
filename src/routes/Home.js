//Home은 "/" 상태에 드러나는 기본 화면이다
//ToDo 리스트의 입력 창을 보여준다
//useState를 사용하여 text를 관리한다
import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

//함수형 컴포넌트다 toDos를 입력으로 받는다
function Home({ toDos, addToDo }) {
  // useState로 관리할 state를 지정한다
  const [text, setText] = useState("");
  //state를 변경하기 위한 함수들이다
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  //실제로 render할 내용들이다
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

//connect의 첫번째 인자로 들어가는 함수
//state를 불러오는 역할을 한다
function mapStateToProps(state) {
  return { toDos: state };
}

//connect의 두번째 인자로 들어가는 함수
//store의 reducer에 dispatch하는 역할을 한다
function mapDispatchToProbs(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

//connect를 이용해 mapStateToProps라는 함수를 공동으로 사용하는 store와 묶는다
export default connect(mapStateToProps, mapDispatchToProbs)(Home);
