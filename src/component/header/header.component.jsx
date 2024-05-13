import './header.styles.css'
import image from '../../assets/header-image.png';

const Header = () => {
    return (
        <div className="header-background">
            <div className="row header">
                <div className="text-container">
                    <h1 className="heading">
                        Advance Dental Health Plan
                    </h1>
                    <p className="text">
                        Dental care worth ₹8,000/-
                        <br />
                        <b>only at ₹550/-</b>
                    </p>
                    <div className="button">
                        Buy Now
                    </div>
                </div>
                <img src={image} style={{width: '500px'}} alt="" />
            </div>
        </div>
    )
}
export default Header