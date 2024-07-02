import React from 'react'
import icone from "../../images/icos-removebg-preview.png"
import recherche from "../../images/recherche.jpeg"
import user from "../../images/user.jpeg"
import panier from "../../images/panier.jpeg"
import logo from "../../images/logos.png"
import ima1 from "../../images/wal/fonds.png"
import ima2 from "../../images/wal/users.png"
import ima3 from "../../images/wal/sac.png"
import ima4 from "../../images/wal/Statistics.png"
import "../Propos/Propos.modules.css"
import { NavLink } from 'react-router-dom'
const Propos = () => {
   function countTo() {
      let from= 10
      let to= 110
      let step = to > from ? 1: -1
      let interval = 50

      if (from === to) {
         document.querySelector(".card1")
         .textContent = from

         return;
      }
      let counter= setInterval(function() {
         from +=step
         document.querySelector('.card1')
         .textContent= from

         if (from === to) {
            clearInterval(counter)
         }
      },interval)
   } 
   countTo()

   function counttou() {
      let from= 10
      let to= 80
      let step = to > from ? 1: -1
      let interval = 15

      if (from === to) {
         document.querySelector(".carde2")
         .textContent = from

         return;
      }
      let counter= setInterval(function() {
         from +=step
         document.querySelector('.carde2')
         .textContent= from

         if (from === to) {
            clearInterval(counter)
         }
      },interval)
   } 
   counttou()

   function counthre() {
      let from= 0
      let to= 50
      let step = to > from ? 1: -1
      let interval = 10

      if (from === to) {
         document.querySelector(".carde3")
         .textContent = from

         return;
      }
      let counter= setInterval(function() {
         from +=step
         document.querySelector('.carde3')
         .textContent= from

         if (from === to) {
            clearInterval(counter)
         }
      },interval)
   } 
   counthre()


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
      <h1 className="wis">A PROPOS </h1> 
   </section>
  
</section>
    <section>
        <div className='card'>
           <div>
            <img src={ima1} alt="" className='ima'/>
           </div>
           <div className='ecri'>
            <h2>WINI SERVICES SARL : Expérience</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 <br />Inventore quaerat porro esse minima. Reprehenderit sed
                  <br />explicabo sunt nulla similique, vero, deleniti 
                  <br />nostrum consequatur ad debitis iure necessitatibus
                   <br />in exercitationem sapiente eos accusantium cum amet 
                   <br />soluta ipsum? Quae ab repellendus tenetur mollitia?
                    <br />Iste laudantium repellat fugit illo fugiat laboriosam 
                    <br />reiciendis, saepe aliquid assumenda molestiae? Commodi
            </p>
           </div>
        </div>
    </section>
    <section>
      <p className='titre'>
      <h4>NOS REUSSITE EN CHIFFRES</h4>
        <h2>DECOUVREZ NOTRE IMPACT <br />
        EXPERIENCES, CLIENTS, PRODUITS</h2>
      </p>
      <div className='car' >
        <div className='carde_1'>
           <img src={ima2}alt=""  className='icone' />
           <div className='card1'></div>
           <p className='chiff'>Clients Satisfaits</p>
        </div>
        <div className='carde_1'>
        <img src={ima3}alt=""  className='icone' />
           <div className='carde2'></div>
           <p className='chiffs'>Articles</p>
        </div>
        <div className='carde_1'>
        <img src={ima4} alt="" className='icone' />
           <div className='carde3'></div>
           <p className='chiffs'>Expériences</p>    
        </div>
      </div>
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
            <p>Email: wini@gmail.com</p>
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

export default Propos