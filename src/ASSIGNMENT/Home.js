import React, { useState } from 'react'
import "./Home.css"


const Home = () => {

const [months12,setMonths12] = useState(0)


const changing1 = (e)=>{
setMonths12(179)
}

const changing2 = (e)=>{
setMonths12(149)
}

const changing3 = ()=>{
    setMonths12(99)
}

  return (
    <>
    <div id='main'>
    <div id='header'>
    <h1 id='h1'>EDYODA</h1>    
    <select id='select1'>
        <option>Courses</option>
        <option>MERN DEVELOPER</option>
        <option>PYTHON DEVELOPER</option>
        <option>JAVA DEVELOPER</option>
    </select>
    <select id='select2'>
        <option>Programs</option>
        <option>JAVASCRIPT</option>
        <option>PYTHON</option>
        <option>PHP</option>
        <option>JAVA</option>
        <option>TYPESCRIPT</option>
    </select>
   
   <h3 id='search'><i class="fa-solid fa-magnifying-glass"></i></h3>
    <button id='btn1'>Log in</button>
    <button id='btn2'>JOIN NOW</button>
   </div>
   </div>

   <div id='body'>
   <div id='para'>
    <h1 style={{color:"white"}}>Access curated courses worth <br></br> ₹ <strike style={{color:"red"}} ><span style={{color:"white"}}>18,500</span></strike> at just <b style={{color:"#0048ff"}}>₹ 99</b>per year!</h1>
    <h3 style={{color:"white"}}><span style={{fontSize:"20px",color:"white"}}><i class="fa-solid fa-book"></i></span><b style={{paddingLeft:"40px",color:"#0048ff"}}>100+</b> job relevent courses</h3>
   <h3 style={{color:"white"}}><span style={{fontSize:"20px",color:"white"}}><i class="fa-regular fa-clock"></i></span><b style={{paddingLeft:"40px",color:"#0048ff"}}>20,000+</b> Hours of content</h3>
   <h3 style={{color:"white"}}><span style={{fontSize:"20px",color:"white"}}><i class="fa-solid fa-tv"></i></span><b style={{paddingLeft:"40px",color:"#0048ff"}}>Exclusive</b> webiner access</h3>
   <h3 style={{color:"white"}}><span style={{fontSize:"20px",color:"white"}}><i class="fa-solid fa-graduation-cap"></i></span><b style={{marginLeft:"40px",fontSize:"25px"}}>Scholarship worth </b><b style={{color:"#0048ff"}}>₹94,500</b></h3>
   <h3 style={{color:"white"}}><span style={{fontSize:"20px",color:"white"}}><i class="fa-solid fa-ban"></i></span><b style={{paddingLeft:"40px",color:"#0048ff"}}>Ad Free</b> learning experience</h3>
   </div>

  <div id='container'>
  <div id='nums'>
    <div id='num1'>
        <h4>1</h4>
        <p>Sign Up</p>
    </div>
    <div id='num2'>
        <h4>2</h4>
        <p>Subscribe</p>
    </div>
   </div>
   <h3 id='h2'>Select your subscription plan</h3>
   <div id='subscriptions'>
    <div id='sub1'>
        <p id='p3'>Offer expired</p>
        <input id='radio'  type='radio' /><label id='label1'>12 Months Subscription </label>
        <div id='money'>
            <p id='p1'>Total <b>₹99</b></p>
            <h6 id='p2'>₹8 /mo</h6>
        </div>
    </div>
    <div id='sub2'>
        <p id='p31'>Recommended</p>
        <input id='radio2'  onChange={changing1} type='radio' name='feedetails' /><label id='label2'>12 Months Subscription </label>
        <div id='money'>
            <p id='p1'>Total <b>₹179</b></p>
            <h6 id='p2'>₹15 /mo</h6>
        </div>
    </div>
    <div id='sub3'>
        <input id='radio3'  onChange={changing2} type='radio' name='feedetails' /><label id='label3'>6 Months Subscription </label>
        <div id='money'>
            <p id='p13'>Total <b>₹149</b></p>
            <h6 id='p23'>₹25 /mo</h6>
        </div>
    </div>
    <div id='sub4'>
        <input id='radio4'  onChange={changing3} name='feedetails' type='radio' /><label id='label4'>3 Months Subscription </label>
        <div id='money'>
            <p id='p14'>Total <b>₹99</b></p>
            <h6 id='p24'>₹33 /mo</h6>
        </div>
    </div>
    <hr style={{width:"500px",border:" 2px solid black",marginLeft:"25px",marginTop:"30px"}}></hr>
    <div id='total'>
        <p>Subscription Fee</p>
        <h6>₹18,500</h6>
    </div>
    <div id='sub5'>
   <div id='sub55'>
   <p>Limited time offer</p>
    <h6>-₹18,401</h6>
   </div>
    <div id='icon'>
   <h6><i class="fa-regular fa-clock"></i></h6>
   <p>Offer valid till 25th March 2023</p>
    </div>
    </div>
    <div id='totalinc'>
     <p><b>Total</b> (incl of 18% GST)</p>
     <h5><b>₹{months12}</b></h5>
    </div>
    <div id='buttons'>
        <button id='cancel'>CANCEL</button>
        <button id='pay'>PROCEED TO PAY</button>
    </div>
   <div id='razor'>
    <h5 style={{fontSize:"10px",paddingTop:"5px",paddingLeft:"10px",color:"white"}}><i style={{fontSize:"13px"}} class="fa-solid fa-lock"></i> Payments powered by</h5>
    <h1 style={{fontSize:"20px",paddingLeft:"30px",marginTop:"-10px",color:"white"}}><i>Razorpay</i></h1>
   </div>
   </div>
  </div>
   </div>

   
    </>
  )
}

export default Home
