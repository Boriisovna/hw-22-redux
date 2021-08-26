import logo from './logo.svg';
import './App.css';
import PostComponent from './component/Post';
import AddPost from './component/AddPost';
import {useSelector} from 'react-redux'



function App() {
  const posts = useSelector(state => state.posts);
  
  return ( 
    <>
    <div>
    <AddPost/>
      {posts.map((post)=><PostComponent{...post}/>)}
    </div>
    </>
  );

  }


export default App;