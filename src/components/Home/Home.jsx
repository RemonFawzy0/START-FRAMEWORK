import React from 'react'
import style from "./Home.module.css"
import img from "../img/avataaars.svg"
export default function Home() {
  return <>
  <div className= {style.container}>
 <div className= "container">
  <div className="row text-center">
    <div className="col-md-12"> 
   <img className={style.imgs} src={img} alt="avataaars"></img>
  <h2 className={style.text}>START FRAMEWORK</h2>
  <div className={style.starhome}><i class="fa-solid fa-star"></i></div>
  <div className={style.textone}>Graphic Artist - Web Designer - Illustrator</div>
    </div>
   
  </div>
 </div>
  </div>
 




   </>
  
}
