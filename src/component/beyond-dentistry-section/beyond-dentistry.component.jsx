import './beyond-dentistry.styles.css';
import image1 from '../../assets/beyond-dentistry/educational-videos.png';
import image2 from '../../assets/beyond-dentistry/news-media.png';
import image3 from '../../assets/beyond-dentistry/rewards.png';
import image4 from '../../assets/beyond-dentistry/careers.png';


const BeyondDentistrySection = () => {
    return (
        <div className="row">
            <div className="beyond-dentistry-section">
      <div className="heading-section">
      <h1 className='heading'>Beyond Dentistry</h1>
                    <p className='text'>Mapping success in every area</p>
      </div>
                <div className="features-section">
            
                    <div className="col-1-4 feature">
                        <img src={image1} style={{ width: '80px' }} alt="" />
                        <p>Educational Videos</p>
                    </div>
                    <div className="col-1-4 feature">
                        <img src={image2} style={{ width: '100px' }} alt="" />
                        <p>News & Media </p>
                    </div>
                    <div className="col-1-4 feature">
                        <img src={image3} style={{ height: '60px', width: '60px' }} alt="" />
                        <p>Rewards </p>

                    </div>
                    <div className="col-1-4 feature">
                        <img src={image4} style={{ height: '60px', width: '40px' }} alt="" />
                        <p>Careers</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default BeyondDentistrySection;