import './safety-protocols.styles.css';
import image from '../../assets/safety-prototocols/safety.png'
import { ArrowForward } from '@mui/icons-material';


const SafetyProtocols = () => {
    return (
        <div className="safety-protocols-section">
            <div className="row alignment">
                <div className="col-1-3">
                    <div className="form-section">
                        <h1 className="heading">Expert Guidance for Healthy Smiles</h1>
                        <p>Contact Now</p>
                        <form className="form">
                            <label htmlFor="name">Name</label>
                            <br />
                            <input type="text" id='name' />
                            <br />
                            <label htmlFor="phone-number">Mobile Number</label>
                            <br />
                            <input type="text" id='phone-number' />
                            <br />
                            <label htmlFor="concern">Type Concern</label>
                            <br />
                            <input type="text" id='concern' />
                            <button type='submit'>Book A Free Consultation</button>
                        </form>

                    </div>
                </div>
                <div className="col-1-9">
                    <div className="safety-text-container">
                        <div>
                            <h1 className="heading">10x Safety Protocols</h1>
                            <p>Monitored by DORI <br /> (Artificial Intelligence System)</p>
                            <p className='learn-more-button'>Learn More &nbsp; <ArrowForward /></p>
                        </div>
                        <img src={image} alt="" />
                    </div>
                    <div className="second-section">
                        <div className="col-1-2">
                            <div className='section-1'>
                                <h1 className="sub-heading">450+ Neighbourhood</h1>
                                <p style={{margin: '10px 0px'}}>Clinics Pan India</p>
                                <p className='learn-more-button'>Locate Clinic near you &nbsp; <ArrowForward /></p>
                            </div>
                        </div>
                        <div className="col-1-2">
                            <div className='section-2'>
                                <h1 className="sub-heading">1200+ Expert Doctors</h1>
                                <p style={{margin: '10px 0px'}}>Covering All Specialities</p>
                                <p className='learn-more-button'> Explore Dentists Nearby &nbsp; <ArrowForward /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SafetyProtocols