import React from 'react'
import "./NewsLetter.css"
function NewsLetter() {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our news letter ans stay updated</p>
        <div>
            <input type="email" className="input" placeholder='Enter Your Email ID'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
