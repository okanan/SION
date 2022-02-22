import React ,  { useContext, useEffect } from 'react'
import {AppProvider, AppContext} from '../helpers/context'

import './styles/Blog.scss'

const Blog = () => {

  const {state, setState} = useContext(AppContext)

  const renderDetalle = () => {
    if(state.postDetail){
  
      const {postDetail} = state;
  
      return(
        <div className='post-detail'>
          <h2 className='title'>{postDetail.titulo}</h2>
          {postDetail.contenido}
          <br/>
          <br/>
          <br/>
          {postDetail.imagen && <img className='post-img' src={postDetail.imagen} ></img>}
        </div>
      )
  
  
    }

  }

  useEffect(() => {
    state.postDetail === {} && setState({...state, postDetail: state.posts[0]})
  }, [])
  



  return (
    <div className='blog-cont'>
      {renderDetalle()}
      <div className='post-list'>
        <h1 className='title'>Otros posts</h1>
        {state.posts.map((ele, index) => {
          return(
            <div 
              key={index}
              onClick={() => setState({...state, postDetail: ele})}
              className='post-ele'
            >
              {ele.titulo}
            </div>
          )
        })}

      </div>
    </div>
  )
}

export { Blog }