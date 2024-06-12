import React from 'react'
import'./Modal.css'

function Modal({id, movieName, description, image, episode}) {
    
  let user = {
    age:'10',
    name:'phuc'
  }
  console.log(attr)
  return (
      <div className='modal_container'>
            <div className='modal_content'>
            <img src={img} alt="pikachu name" />
            <p className='modal_card_id' >{id}</p>
            <label for="name">Name:</label>
            <input name='name' value={name}/><br />
            <label for="name">Attributes:</label>
            <input name='attributes' value={attr}/><br />
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
  )
}

export default Modal