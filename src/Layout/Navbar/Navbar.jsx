import React from 'react'
import icone from "../../images/icos-removebg-preview.png"
import style from "../Navbar/Navbar.module.css"
import recherche from "../../images/recherche.jpeg"
import user from "../../images/user.jpeg"
import panier from "../../images/panier.jpeg"
import logo from "../../images/logos.png"
import img1 from "../../images/marketing.png"
import img2 from "../../images/chef_ch.png"
import img3 from "../../images/ico_car.png"
import img4 from "../../images/capture .jpg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<section>
<section className={style.navbar}>
   
   <section className={style.nav}>
      <img src={icone} alt="" className={style.pho}/>
      <img src={recherche} alt="" className={style.pho2}/>
      <img src={user} alt="" className={style.pho3}/>
      <img src={panier} alt="" className={style.pho4}/>
   </section>
   <section className={style.liens}>
      <h3 className={style.wini}>Wini Services sarl <img src={logo} alt="" className={style.pho5}/></h3>
      <NavLink to={"/"} className={style.ac}>Acceuil</NavLink> 
      <NavLink to={"/services"} className={style.se}>Services</NavLink>
     <NavLink to={"/propos"} className={style.pro}>A Propos</NavLink>
      <NavLink to={"/contact"} className={style.co}>Contact</NavLink>
   </section>
   <section className={style.texte}>
      <h1 className={style.wi}>LOREM IPSUM LOREM </h1> 
      <p className={style.tex}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Iusto quaerat, nemo fuga nam
</p>

      <button type="submit" className={style.btn}>En Savoir Plus</button>
   </section>
  
</section>

   <section className={style.ecrit}>
      <p >
         <h5 className={style.po}>A Propos de nos services</h5>
         <h2 className={style.lo}>LOREM IPSUM LOREM</h2>
      </p>
     <div className={style.card}>
       <div className={style.card1}><img src={img1} alt="" className={style.img1}/>
       <p className={style.lor}>Lorem ipsum dolor sit.</p></div>
       <div className={style.card2}><img src={img2} alt="" className={style.img1}/>
       <p className={style.lor}>Lorem ipsum dolor sit.</p></div>
       <div className={style.card3}><img src={img3} alt="" className={style.img1}/>
       <p className={style.lor}>Lorem ipsum dolor sit.</p></div>
     </div>
   </section>
   <section>
      <div>
         <p >
            <h4 className={style.section2}>Consulter nos catégories</h4>
            <h2 className={style.sect}>Produits par Catégories</h2>
         </p>
         <p>
            <img src={img4} alt="" className={style.img4}/>
         </p>
         <p>
            <button type="submit" className={style.btn1}>Tous nos produits</button>
         </p>
      </div>
   </section>
   <section className={style.ecrit2}>
      <div className={style.po2}>
         <h2>ENTREZ VOTRE EMAIL POUR ETRE AU COURANT<br /> DES DERNIERES NOUVELLES</h2>
         <h4>Recevez les mises à jour et <br />offres spéciales</h4>
      </div>
      <div className={style.inpute}>
         <input type="email" name="" id="" placeholder='Entrez votre email' className={style.put}/>
         <button type="submit" className={style.btn2}> Souscrire</button>
      </div>
   </section>
   <section className={style.footer }>
      <div className={style.foot}>
      <img src={logo} alt="" className={style.dernier}/> 
         <h3 className={style.win}>Wini Services Sarl</h3>
         <h5 className={style.der}>Lorem ipsum dolor sit amet. lorem
            <br />lorem ipsum lorem ipsum
            <br />lorem ispsum
         </h5>
         <img src={icone} alt="" />
      </div>
      <div className={style.contact}> 
         <p><h5>Liens utiles</h5></p>
         <p >
        <p> <NavLink to={"/"} className={style.ac}>Acceuil</NavLink> </p>
       <p>  <NavLink to={"/services"} className={style.se}>Services</NavLink> </p>
        <p> <NavLink to={"/propos"} className={style.pro}>A Propos</NavLink>  </p>
         <p><NavLink to={"/contact"} className={style.co}>Contact</NavLink></p> 
         </p>
      </div>
      <div className={style.li}>
         <p><h5>Contact</h5></p>
         <p>
            <p>
         Tel:(+228)90909090
         <br />    98989898
         </p>
            <p>Email: wini@gmail.com</p>
            <p> Adresse: Agbalépédogan</p>
         </p>
      </div>
      <div className={style.lie}>
         <p><h5>Emploies du temps</h5></p>
         <p>
            <p>Lun-vend : 07h00-18h00</p>
            <p>Sam : 07h00-14h00</p>
            <p>Dim : Fermé</p>
         </p>
      </div>
   
   </section>
</section>
  )
}

export default Navbar