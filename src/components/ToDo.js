import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
//Router와 함께 사용되는 기능
//Link를 통해 url을 조정하여 Routing을 수행
import { Link } from "react-router-dom";

//text와 onBtnClick을 인자로 받는 함수형 컴포넌트
//onBtnClick을 이벤트리스너로 받는 text 값을 가진 li를 생성
function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      {/* id를 링크로 가지는 Link를 생성 */}
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

//mapDispatchToProbs 함수를 이용해 onBtnClick이라는 함수를 생성
//mapDispatchToProbs를 통해 만들어진 함수이므로 dispatch의 권한을 가짐
//클릭하면 deleteToDo가 발동되도록 함
function mapDispatchToProbs(dispatch, ownProbs) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProbs.id)),
  };
}

//두번째 인자만 소환했다는 건 state를 불러오는 건 관심없고 dispatch에만 관심 있다는 뜻
export default connect(null, mapDispatchToProbs)(ToDo);
