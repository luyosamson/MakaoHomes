import React from "react"
// import { useNavigate } from "react-router-dom"
import { footer } from "../../data"
import "./Footer.css"
import {BsFillHouseFill} from 'react-icons/bs'
import { Container } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {


  return (
    <>
    <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
          
            <div className='text'>
              <h1>have any questions ?</h1>

              <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
                <a href="https://facebook.com/home.php">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a href="https://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a href="https://tiktok.com">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>

                <a href="https://youtube.com">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>

              </div>

              <p>Your Gateway to a richer life where your dreams come home.</p>
              <a href="/sellwithus"><button className="btn">Sell With Us</button></a>
            </div>
          </div>
          
        </div>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
            <h1><span><BsFillHouseFill/>Makao</span>Homes</h1>
              <h2>Make Your Dreams a Reality</h2>
              

              
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </footer>
      <div className='legal'>
        <span>© 2023 Makao Homes. All Rights Reserved.</span>
      </div>
    </section>
    </>
  )
}

export default Footer