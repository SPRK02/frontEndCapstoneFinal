import React from 'react';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned mediterraneanran restaurant, focused on tadition recipes served with a modern twist</p>
                </div>
                <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 123 456 7890</li>
                        <li>Email: <br/> admin@littleLemon.com</li>

                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;