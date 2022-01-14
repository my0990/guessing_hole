import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const [fileValue,setFileValue] = useState({file:'', previewURL:''});
  const onChange = (e) => {
    let reader = new FileReader;
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFileValue({
        file: file,
        previewURL: reader.result
      })
    }
    reader.readAsDataURL(file);
  }
  let profile_preview = null;
  if(fileValue.file !==''){
    profile_preview = <img className='profile_preview' src={fileValue.previewURL}></img>
  }
  return (
    <div className="App">
      <header className="App-header">
        <input 
          type='file' 
          multiple='multiple'
          accept='image/jpg, image/png, image/jpeg, image/gif'
          name='profile_img'
          onChange={onChange}>
        </input>
        {profile_preview}
      </header>
    </div>
  );
}

export default App;
