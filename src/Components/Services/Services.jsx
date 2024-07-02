import React from 'react'
import icone from "../../images/icos-removebg-preview.png"
import recherche from "../../images/recherche.jpeg"
import user from "../../images/user.jpeg"
import panier from "../../images/panier.jpeg"
import logo from "../../images/logos.png"
import im1 from "../../images/wal/equipements.jpeg"
import im2 from "../../images/wal/gilet_wini.jpg"
import im3 from "../../images/wal/herbes.jpg"
import im4 from "../../images/wal/info.jpeg"
import im5 from "../../images/wal/car1.png"
import im6 from "../../images/wal/camion.png"
import im7 from "../../images/wal/bus.jpg"
import im8 from "../../images/wal/home.png"
import im9 from "../../images/wal/chantier.png"
import im10 from "../../images/wal/chantier2.png"
import im11 from "../../images/wal/cons.jpg"
import im12 from "../../images/wal/travail.png"
import '../Services/Services.modules.css'
import { NavLink } from 'react-router-dom'

const Services = () => {
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
  <h1 className="wis">Nos services</h1>  
</section>

</section>
    <section>
        <h2 className='title'>Nos Ventes</h2>
        <p className='vente'>
           <p className='images'>
           <img src={im1} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p>
           <p>
            <img src={im2} alt="" className='image'/>
            <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
            <p className='lorem1'>price</p>
           </p>
           <p>
            <img src={im3}alt="" className='image'/>
            <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
            <p className='lorem1'>price</p>
           </p>
           <p>
            <img src={im4} alt="" className='image'/>
            <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
            <p className='lorem1'>price</p>
           </p>
        </p>
        <h2 className='title'>Nos locations</h2>
        <p className='vente'>
        <p>
           <img src={im5} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p>
           <p>
           <img src={im6} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p>
           <p>
           <img src={im7} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p>
           <p>
           <img src={im8} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p> 
        </p>
            <h2 className='title'>Nos Constructions</h2>
        <p className='vente'>
         <p>
         <img src={im9} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
         </p>
        <p>
        <img src={im10} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
        </p>
           <p>
           <img src={im11} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p>
           <p>
           <img src={im12} alt="" className='image'/> 
           <h6 className='lorem'>Lorem ipsum dolor sit amet.</h6>
           <p className='lorem1'>price</p>
           </p>
        </p>
        
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
         <p><p>
         Tel:(+228)90909090
         <br />98989898
         </p>
           <p> Email: wini@gmail.com</p>
           <p> Adresse: Agbalépédogan</p>
         </p>
      </div>
      <div> 
      <p><h5>Liens utiles</h5></p>  
      <p>
         <NavLink to={"/"} className="acc">Acceuil</NavLink> <br />
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

export default Services