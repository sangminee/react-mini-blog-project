import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

// import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); // [state 데이터 , state 데이터 수정함수] 
//   let [like, setLike] = useState(0); // 초기값 입력
//   let posts = '강남 고기 맛집'; // 서버에서 가져온 데이터 
  
//   function changeTitle(){
//     // state의 복사본을 만들어서 수정 
//     var newArray = [...title]; // deep copy 
//     newArray[0] = '여자 코트 추천';
//     setTitle( newArray ); // state를 아예 대체해주는 데이터
//   }
  
//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div style={{color : 'blue', fontSize : '30px'}}>개발 Blog</div>
//       </div>
//       <button onClick={changeTitle}>버튼</button>
//       <div className="list">
//         <h3> {title[0]} <span onClick={ () => {setLike(like + 1)}}>👍</span> {like} </h3>
//         <p> 2월 17일 발행</p>
//         <hr/>
//       </div>
//       <div className="list">
//         <h3> {title[1]} </h3>
//         <p> 2월 17일 발행</p>
//         <hr/>
//       </div>
//       <div className="list">
//         <h3> {title[2]} </h3>
//         <p> 2월 17일 발행</p>
//         <hr/>
//       </div>

//       <Modal/>
      
//     </div>
//   );
// }


// function Modal(){
//   return (
//     <div className="modal">
//         <h2>제목</h2>
//         <p>날짜</p>
//         <p>상세내용</p>
//       </div>
//   )
// }

// export default App;
