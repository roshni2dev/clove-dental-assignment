
import { FacebookRounded, Instagram, YouTube } from '@mui/icons-material';
import './footer.styles.css';

const treatmentsList = ['Laser Dentistery', 'Dental fillings', 'Root canal Treatment', 'Wisdom Teeth removal', 'Braces & Aligners', 'Clear Aligners', 'Dental Implants',]
const quickLinks = ['Home', 'Services', 'About Us', 'Locations', 'Bool Appointments', 'Contact Us'];
const exploreClove = ['Our Team', 'Clinic Overview', 'Testimonials', 'Blogs', 'News'];
const legal = ['Privacy Policy', 'Terms of service', 'Accessibility']
const social = [<Instagram style={{ fill: '#FFEFE2', marginRight: '10px', fontSize: '30px' }} />, <FacebookRounded style={{ fill: '#FFEFE2', marginRight: '10px', fontSize: '30px' }} />, <YouTube style={{ fill: '#FFEFE2', fontSize: '30px' }} />]

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="row footer">
                <div className="listed-footer-text">
                    <div className="col-1-5">
                        <p className='footer-heading'>Treatments</p>
                        <div className='footer-text-list'>
                            {
                                treatmentsList.map((item) => (
                                    <p className='footer-text'>{item}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-1-5" >
                        <p className='footer-heading'>Quick Links</p>
                        <div className='footer-text-list'>
                            {
                                quickLinks.map((item) => (
                                    <p className='footer-text'>{item}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-1-5" >
                        <p className='footer-heading'>Explore Clove</p>
                        <div className='footer-text-list'>
                            {
                                exploreClove.map((item) => (
                                    <p className='footer-text'>{item}</p>
                                ))
                            }
                        </div></div>
                    <div className="col-1-5" >
                        <p className='footer-heading'>Legal</p>
                        <div className='footer-text-list'>
                            {
                                legal.map((item) => (
                                    <p className='footer-text'>{item}</p>
                                ))
                            }
                        </div></div>
                    <div className="col-1-5" >
                        <p className='footer-heading'>Connect With Us</p>
                        <div className='footer-text-list'>
                            <div className='footer-text-list'>
                                {
                                    social.map((item) => (
                                        <>
                                            {item}
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-logo-container">
                    <h1 className='footer-logo-heading'>clove<span className='icon'>:)</span></h1>
                    <span className='footer-logo-text'>dental</span>

                </div>
            </div>
        </div>
    )
}
export default Footer;