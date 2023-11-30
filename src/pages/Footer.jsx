import React from 'react'
import './footer.css'
import logo from '../images/logo.png'
import FooterNavItem from '../components/FooterNavItem'
const Footer = () => {
    const usefulLinks =[
        'Home',
        'Movies',
        'My-List',
        'Terms of service',
        'Privacy Policy'
    ];
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo ego',
        'Frementum icalius'
    ];
  return (
     <footer id='footer' className='footer'>
       <div className="footer-top">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                   <a href="/" className='logo d-flex text-align-center'>
                     <span><img src={logo} alt="" />MOVIES</span>

                   </a>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, quisquam ratione? Quam quae aliquam corporis ipsum nostrum nihil ducimus. Officia provident impedit ea pariatur sunt itaque voluptatibus architecto nostrum. Temporibus.</p>
                </div>
                <div className="social-links mt-3">
                    <a href="" className='twitter'>
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="" className='facebook'>
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="" className='instagram'>
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="" className='linkedin'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
                <h4>UseFul Links</h4>
                <ul>
                    {usefulLinks.map(link=>(
                        <FooterNavItem key={link} name={link} />
                    ))}
                </ul>
            </div>
            <div className="col-lg-3 col-md-2 footer-contact text-contact text-md-start" >
                <h4>Contact Us</h4>
                <p>
                    Street Name<br />
                    City Name, State 421301
                    <br/>
                    <strong>Phone:</strong> 999999999
                    <br />
                    <strong>Email:</strong>pranavdhangar11@gmail.com
                    <br/>
                </p>
            </div>
        </div>
       </div>
       <div className="container">
        <div className="copyright">
            &copy: Copyright{' '}
            <strong>
                <span>Xtechs</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Designed by <a href="#">Pranav Dhangar</a>
        </div>
       </div>
     </footer>
  )
}

export default Footer
