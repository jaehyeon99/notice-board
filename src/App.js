
import './App.css';
import { useState } from 'react';

function App() {

  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })
  const getValue = e => {
    const { name, value } = e.target;
    const co_movieContent = [...movieContent]

    console.log(movieContent);
  }

  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className="movie-container">
        <h2>제목</h2>
        <div>
          내용
        </div>
      </div>
      <div className="form-wrapper">
        <input className="title-input" type="text" placeholder="제목" onChange={getValue} name='title'></input>
        <textarea className="text-area" placeholder="내용"></textarea>
      </div>
      <button className="submit-button">입력</button>
    </div>
  );
}

export default App;
