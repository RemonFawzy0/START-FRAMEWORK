import React from 'react'
import style from "./Portfolio.module.css"
import imgone from "../img/poert1.png"
import imgtwo from "../img/port2.png"
import imgthree from "../img/port3.png"
export default function Portfolio() {
  return <>
  <div>
    <div>
      <h2 className= {style.portfolio}>PORTFOLIO COMPONENT</h2>
      <div className={style.starportfolio}><i class="fa-solid fa-star"></i></div>
    </div>
    <div className="container">
      <div className="row gy-4">
        <div className="col-md-4">
        <div className="card">
  <img src= {imgone} className="card-img-top" alt="poert1" ></img>
                </div>
        </div>
        <div className="col-md-4">
        <div className="card">
  <img src= {imgtwo} className="card-img-top" alt="poert2" ></img>
                </div>
        </div>
        <div className="col-md-4">
        <div className="card">
  <img src= {imgthree} className="card-img-top" alt="poert3" ></img>
                </div>
        </div>
        <div className="col-md-4 pb-4">
        <div className="card">
  <img src= {imgone} className="card-img-top" alt="poert1" ></img>
                </div>
        </div>
        <div className="col-md-4 pb-4">
        <div className="card">
  <img src= {imgtwo} className="card-img-top" alt="poert2" ></img>
                </div>
        </div>
        <div className="col-md-4 pb-4">
        <div className="card">
  <img src= {imgthree} className="card-img-top" alt="poert3" ></img>
                </div>
        </div>
        </div>
      </div>
  </div>
  
  
  
  
  </>
  
}
