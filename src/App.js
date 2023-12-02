import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/today' element={<Today />} />
                <Route path='/developer' element={<Developer />} />
                <Route path='/webd' element={<Webd />} />
                <Route path='/website' element={<Website />} />
                <Route path='/gsap' element={<Gsap />} />
                <Route path='/port' element={<Port />} />
                <Route path='/youtube' element={<Youtube />} />
                <Route path='/channel/:channelId' element={<Channel />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='*' element={<Not />} />
            </Routes>
        </BrowserRouter>
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
