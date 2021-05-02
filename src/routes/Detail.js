import React from "react";
import { connect, connnect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
}

//ownProps은 component를 렌더링할 때 넣어주는 props를 의미. 생략해도 됨.
//여기서는 id 정보를 가져오려고 선언
//렌더링할 때 자동으로 실행되며 toDo의 내용을 state 내에서 id로 검색하여 일치하는 것을 반환한다
function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

//첫번째 인자만 있다는 건 dispatch에는 관심없고 state의 내용만 보고싶다는 뜻이다
export default connect(mapStateToProps)(Detail);
