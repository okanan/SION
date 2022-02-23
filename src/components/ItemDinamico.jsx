import React from 'react'

import './styles/ItemDinamico.scss'

const ItemDinamico = ({items }) => {



  return (
    <div className='list-container'>
      {items.map((item, index) => {
        return (
        <div 
          key={index}
          className='list-item'
          style={{backgroundImage: `url(${item.background})`}} 
        >
          <div className='list-item_contain' > 
            <h3>{item.titulo}</h3>
            <p>{item.valor}</p>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export { ItemDinamico }