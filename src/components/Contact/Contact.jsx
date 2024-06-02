import React from 'react'
import style from "./Contact.module.css"
export default function Contact() {
  return <>
      <div>
        <div className="container">
          <div className="class">
            <h2 className={style.contact}>CONATCT SECTION</h2>
            <div className={style.starcontact}><i class="fa-solid fa-star"></i></div>
          </div>
          <div className="row d-flex justify-content-center align-content-center ">
            <div className="col-md-6 py-4 ">
            <div className="form-floating mb-3 ">
  <input type="text" className="form-control" id="floatingInput" placeholder="name"/>
  <label for="floatingInput">userName</label>
</div>
<div className="form-floating ">
  <input type="namber" className="form-control" id="floatingInput" placeholder="namber"/>
  <label for="floatingPassword">userAge</label>
  <div className="form-floating mt-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mt-3 mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
</div>
<div className= {style.button}>
<button >send Message</button>
</div>
            </div>
          </div>
        </div>
      </div>
  
  
  </>
}
