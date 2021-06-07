import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';
import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';


function App() {

  // const [title, settitle] = useState([]) // 제목 state
  // const [content, setcontent] = useState([]) // 내용 contents state
  // const [viewContent, setViewContent] = useState([]) // 제목 + 내용 state

  const [boardContent, setboardContent] = useState({
    title: ' ',
    content: ' '
  })
  const [viewContent, setViewContent] = useState([])


  // const getValue = e => {
  //   const { name, value } = e.target;
  //   setboardContent({
  //     ...boardContent,
  //     [name]: value
  //   })
  //   console.log(boardContent);
  // }

  return (
    <div className="App">
      <h1>📌 게시판 📌</h1>
      <div className='movie-container'>
        {viewContent.map(element =>
          <div>
            <h2>제목 : {element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}

              <hr></hr>
            </div>

          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type="text" placeholder="제목을 입력해주세요." onChange={(e) => {
          setboardContent({
            ...boardContent,
            title: e.target.value
          })
          console.log(boardContent)
        }}
          // console.log(title) // title 정상적으로 value 값 바뀜

          name='title'></input>

        <CKEditor // CKEditer 사용 
          editor={ClassicEditor}
          data=" "

          onChange={(event, editor) => {
            const data = editor.getData();
            setboardContent({
              ...boardContent,
              content: data
            })
            // console.log(content) // content 정상적으로 value 값 바뀜 


          }}
          onBlur={(event, editor) => {

          }}
          onFocus={(event, editor) => {

          }} // CKEditer 사용 
        />
      </div>
      <button className="submit-button" onClick={() => {

        setViewContent(viewContent.concat({ ...boardContent }))


      }

      }> 글 올리기 </button>
    </div >
  );
}

export default App;
