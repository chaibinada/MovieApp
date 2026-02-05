import React from 'react'
import Foooter from './Foooter'

function Contact() {
  return (
    <div className='ct'> 
     <form class="contact-form">
        <h2>Contactez-nous</h2>

        <label style={{color:'black',fontWeight:'bold'}}>Nom</label>
        <input type="text" placeholder="Votre nom" required></input>

        <label style={{color:'black',fontWeight:'bold'}}>Email</label>
        <input type="email" placeholder="Votre email" required></input>

        <label style={{color:'black',fontWeight:'bold'}}>Message</label>
        <textarea placeholder="Votre message" required></textarea>

        <button type="submit">Envoyer</button>
    </form>
    </div>
  )
}

export default Contact
