
import { KeyboardArrowDown } from '@mui/icons-material';
import NavList from './nav-list.component';
import './navigation.styles.css';

const navList = ['Treatments', 'Dental Plans', 'Our Doctors', 'Careers', 'Find a Clinic', 'Book Appointment', 'Help ?']

const Navigation = () => {
    return (
        <div className="nav-container">
            <div className='nav-bar row'>
                <div className="logo-container">
                    <h1 className='logo-heading'>clove<span className='icon'>:)</span></h1>
                    <span className='logo-text'>dental</span>

                </div>
                <div className="list-container">
                    {
                        navList.map((item, id) => (
                            <NavList item={item} key={id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Navigation;