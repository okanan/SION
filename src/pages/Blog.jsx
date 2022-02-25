import React ,  { useContext, useState, useEffect } from 'react'
import {AppProvider, AppContext} from '../helpers/context'

import './styles/Blog.scss'

const Blog = () => {

  const {state, setState} = useContext(AppContext)


  const renderDetalle = () => {
    if(state.postDetail){
  
      const {postDetail, posts} = state;
  
      return(
        <div className='post-detail'>
          <h2 className='title'>{state.postDetail !== '' ? postDetail.titulo : posts[0].titulo }</h2>
          {state.postDetail !== '' ? postDetail.contenido : posts[0].contenido}
          <br/>
          <br/>
          <br/>
          {postDetail.imagen && <img className='post-img' src={postDetail.imagen} ></img>}
        </div>
      )
  
  
    }

  }

  useEffect(() => {
    !Object.keys(state.postDetail).length && setState({...state, postDetail: state.posts[0]})
  }, [])
  



  return (
    <div className='blog-cont'>
      {renderDetalle()}
      <div className='post-list'>
        <h1 className='title'>Otros posts</h1>
        {!state.postDetail !== '' && state.posts.map((ele, index) => {
          if(ele.tipo !== 'texto'){
            return(
              <div 
                key={index}
                onClick={() => setState({...state, postDetail: ele})}
                className='post-ele'
              >
                {ele.titulo}
              </div>
            )
          }
        })}

      </div>
    </div>
  )
}

export { Blog }