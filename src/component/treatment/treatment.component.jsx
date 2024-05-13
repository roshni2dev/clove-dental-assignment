import './treatment.styles.css'
import image1 from '../../assets/treatments/image-1.png';
import image2 from '../../assets/treatments/image-2.png';
import image3 from '../../assets/treatments/image-3.png';
import image4 from '../../assets/treatments/image-4.png';
import image5 from '../../assets/treatments/image-5.png';
import image6 from '../../assets/treatments/image-6.png';
import image7 from '../../assets/treatments/image-7.png';
import image8 from '../../assets/treatments/image-8.png';
import image9 from '../../assets/treatments/image-9.png';
import image10 from '../../assets/treatments/image-10.png';
import image11 from '../../assets/treatments/image-11.png';
import image12 from '../../assets/treatments/image-12.png';
import { ArrowForward, Search } from '@mui/icons-material';

const data1 = [
    {
        icon: <img src={image1} alt='' style={{width: '40px'}} />,
        title: 'Root Canal Treatment'
    }
    , {
        icon: <img src={image2} alt=''  style={{width: '80px'}}/>,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image3} alt='' style={{width: '50px'}} />,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image4} alt='' style={{width: '70px'}} />,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image5} alt='' style={{width: '40px'}}/>,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image6} alt='' style={{width: '60px'}}/>,
        title: 'Root Canal Treatment'
    },


]

const data2 = [
    {
        icon: <img src={image7} alt='' style={{width: '50px'}} />,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image8} alt=''  style={{width: '50px'}}/>,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image9} alt=''  style={{width: '60px'}}/>,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image10} alt='' style={{width: '40px'}} />,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image11} alt='' style={{width: '40px'}} />,
        title: 'Root Canal Treatment'
    },
    {
        icon: <img src={image12} alt='' style={{width: '70px'}} />,
        title: 'Root Canal Treatment'
    }
]



const Treatment = () => {
    return (
        <div className="row">
            <div className="treatment-section">
                <div className="heading-section">
                    <h1 className='heading'>All dental issues from simple cleaning
                        to full mouth rehabilitation under one roof</h1>
                </div>
                <div className="features-section">
                    {
                        data1.map((data) => (
                            <div className="col-1-6 feature">
                                {data.icon}
                                <p>{data.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="features-section" >
                    {
                        data2.map((data) => (
                            <div className="col-1-6 feature">
                                {data.icon}
                                <p>{data.title}</p>
                            </div>
                        ))
                    }
                </div>
                <p className='explore-treatment'>
                    <Search style={{fill: '#EA7D28'}}/>&nbsp;
                    <span style={{textDecoration: 'underline'}}> Explore Treatments</span>
                    &nbsp;<ArrowForward style={{fill: '#EA7D28'}} />
                    </p>
            </div>
        </div>
    )
}
export default Treatment;