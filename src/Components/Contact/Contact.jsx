import React from 'react'
import icone from "../../images/icos-removebg-preview.png"
import recherche from "../../images/recherche.jpeg"
import user from "../../images/user.jpeg"
import panier from "../../images/panier.jpeg"
import logo from "../../images/logos.png"
import localisations from "../../images/wal/loca.png"
import mail from "../../images/wal/Mail.png"
import phone from "../../images/wal/phone.png"
import ima1 from "../../images/wal/fonds.png"
import "../Contact/Contact.modules.css"
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <section>
      <section className="navbar">
   
   <section className="nav">
      <img src={icone} alt="" className="pho"/>
      <img src={recherche} alt="" className="pho2"/>
      <img src={user} alt="" className="pho3"/>
      <img src={panier} alt="" className="pho4"/>
   </section>
   <section className="liens">
      <h3 className="wini">Wini Services sarl <img src={logo} alt="" className="pho5"/></h3>
      <NavLink to={"/"} className="ac">Acceuil</NavLink> 
      <NavLink to={"/services"} className="se">Services</NavLink>
     <NavLink to={"/propos"} className="pro">A Propos</NavLink>
      <NavLink to={"/contact"} className="co">Contact</NavLink>
   </section>
   <section className="texte">
      <h1 className="wis">CONTACTEZ-NOUS</h1> 
   </section>
  
</section>
<section className='cadre'>
    <div className='cadre1'>
      <img src={localisations} alt="" className='lisations'/>
      <h3 className='adresse'>Adresse</h3>
      <p className='ip'>Lorem ipsum dolor sit<br />adipisicing elit. Quas</p>
    </div>
    <div className='cadre1'>
      <img src={mail} alt=""  className='lisations' />
      <h3 className='adresse'>E-mail</h3>
      <p className='ip'>Lorem ipsum dolor sit<br />adipisicing elit. Quas</p>
    </div>
    <div className='cadre1'>
      <img src={phone} alt="" className='lisations'/>
      <h3 className='adresse'>Téléphone</h3>
      <p className='ip'>Lorem ipsum dolor sit <br />adipisicing elit. Quas</p>
    </div>
</section>
<section className='grand_card'>
  <section className='partie1'>
    <img src={ima1} alt="" className='sations'/>
  </section>
  <section className='forme'>
    <h2>Envoyez nous un message</h2>
    <p>Nous vous répondrons dans les 24heures ouvrées.</p>
    <form action="">
    <p>
    <label htmlFor="name">Nom complet</label>
      <br />
      <input type="name" name="" id="" placeholder='Prenom'/>
      <input type="name" name="" id="" placeholder='Nom' className='in'/>
    </p>
  <p>
  <label htmlFor="number">Téléphone</label>
      <br />
      <input type="number" name="" id="" />
  </p>
    <p>
    <label htmlFor="email">Email</label>
      <br />
      <input type="email" name="" id="" />
    </p>
    <p>
    <label htmlFor="message">Message</label>
      <br />
      <textarea name="" id="" cols="30" rows="10" placeholder='Tapez votre message'/>
    </p>
    <p>
    <button type="submit" className='btn3'>Envoyer</button>
    </p>
    </form>
  </section>
</section>
 <section>
 <section className="ecrit2">
      <div className="po2">
         <h2>ENTREZ VOTRE EMAIL POUR ETRE AU COURANT<br /> DES DERNIERES NOUVELLES</h2>
         <h4>Recevez les mises à jour et <br />offres spéciales</h4>
      </div>
      <div className="inpute">
         <input type="email" name="" id="" placeholder='Entrez votre email' className="put"/>
         <button type="submit" className="btn2"> Souscrire</button>
      </div>
   </section>
   <section className="footer">
      <div className="foot">
         <h2>Wini Services Sarl</h2>
         <h5>Lorem ipsum dolor sit amet.</h5>
      </div>
      <div className="contact">
         <p><h5>Contact</h5></p>
         <p> <p>Tel:(+228)90909090
            <br />98989898</p>
           <p> Email: wini@gmail.com</p>
           <p>Adresse: Agbalépédogan</p>
         </p>
      </div>
      <div> 
         <p><h5>Liens utiles</h5></p>
        <p> <NavLink to={"/"} className="acc">Acceuil</NavLink> <br />
         <NavLink to={"/services"} className="acc">Services</NavLink> <br />
         <NavLink to={"/propos"} className="acc">A Propos</NavLink>  <br />
         <NavLink to={"/contact"} className="acc">Contact</NavLink> <br />
         <NavLink className="acc">Compte</NavLink> <br />
         <NavLink className="acc">Panier</NavLink> <br />
         </p>
      </div>
   </section>
 </section>
    </section>
  ) 
}

export default Contact