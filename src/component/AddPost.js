import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './addpost.css'

const defaultText ='On August 6th we witnessed history. SpaceX turned an idea into reality. '
const defaultImg ='https://pbs.twimg.com/media/E8rJ3KaX0AYWNlQ?format=jpg&name=4096x4096'

const authors = [
    {
        name: "Elon Musk",
    },
     {
        name: "Robert Downey Jr",
    }
];



 function AddPost() {
    const dispatch = useDispatch();

    const [postText, setPostText] = useState(defaultText);
    const [postImage, setPostImage] = useState(defaultImg);
    const [postName, setPostName] = useState("Elon Musk");
 

  const handleInputText=(e)=>{
    setPostText(e.target.value)
  };

  const handleInputImage=(e)=>{
    setPostImage(e.target.value)
  };

  const handleInputName=(e)=>{
    setPostName(e.target.value)
  };

  const handleClick=(e)=>{
    e.preventDefault();
    dispatch(action);
  }

  const action = {
    type: 'addNewPost',
    payload: {
        postText, 
        postImage,
        postName
    }

};

    return (
        <div className="wrapper_post">
        <div className='post'>
            <form action="#">
                <div className="header">
                    <div className="header_text">new post</div>
                    <select value={postName} onChange={handleInputName}>
                        {authors.map(a=><option >{a.name }</option> )}
                    </select>
                </div>
                <hr />
                <div className="flex-container">
                    <textarea value={postText} onChange={handleInputText} placeholder='type something here'></textarea>
                    <input value={postImage} onChange={handleInputImage} type="text" placeholder='paste a link' />
                    <button onClick={handleClick} className='add_post'>Add new post</button>
                </div>

            </form>

        </div>
        </div>

    )
}
export default AddPost;