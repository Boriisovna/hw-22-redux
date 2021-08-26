import React, { useState } from 'react';
import './post.css';
import sharepic from '../assets/share.svg'
import heart from '../assets/heart.svg'
import bubble from '../assets/speech-bubble.svg'
import download from '../assets/download.svg'



function PostComponent(props) {

 const [like, setLike] = useState(82)
 const [changeLike, setChangeLike] = useState(false)
 const [share, setShare] = useState(12)
 const [changeShare, setChangeShare] = useState(false)
 const [comment, setComment] = useState(39)
 const [changeComment, setChangecomment] = useState(false)

 const getLike = () => {
        if (changeLike === false) {
            setLike(like + 1);
            setChangeLike(true);
        } else {
            setLike(like - 1);
            setChangeLike(false);
        }
 }
    
 const getShare = () => {
    if (changeShare === false) {
        setShare(share + 1);
        setChangeShare(true);
    } else {
        setShare(share - 1);
        setChangeShare(false);
    }
}

const getComment = () => {
    if (changeComment === false) {
        setComment(comment + 1);
        setChangecomment(true);
    } else {
        setComment(comment - 1);
        setChangecomment(false);
    }
}
    return ( 
        <div className='wrapper_post'>
         <div className='post'>
             <header>
                 <div className='avatar'>
                     <img src={props.photo} alt="" />
                 </div>
                 <div className='info'>
                     <div className="info_name">
                         <span>{props.name}</span>
                         <span className='nickname'>{props.nickname}</span>
                         <span className='date'>{props.date}</span>
                     </div>
                     <div className="info_text">
                     <span>{props.content}</span>
                     </div>
                 </div>
             </header>
             <main>
                 <div className="photo_post">
                     <img src={props.image} alt="" />
                 </div>
                 <div className="icons">
                 <span><img src={heart} onClick={getLike} alt="" /> &nbsp;{like}</span>
                 <span><img src={sharepic} onClick={getShare} alt="" /> &nbsp;{share}</span>
                 <span><img src={bubble}  onClick={getComment} alt="" /> &nbsp;{comment}</span>
                 <span><img src={download} alt="" /></span>
                 </div>
             </main>
         </div>
         </div>
        )
    }

    export default PostComponent;