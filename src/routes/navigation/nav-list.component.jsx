
import { Call, FileCopy, KeyboardArrowDown } from '@mui/icons-material';
import './navigation.styles.css';


const NavList = ({ item }) => {
    return (
        <div className='list-item'>
            {
                item === "Book Appointment"
                    ?
                    <div className='book-appointment-text'>
                        <FileCopy /> &nbsp; &nbsp;
                        <p >{item}</p>
                    </div>
                    :
                    item === "Help ?"
                        ?
                        <div className='help-text'>
                            <Call />&nbsp; &nbsp;
                            <p >{item}</p>
                            <KeyboardArrowDown style={{ fill: '#F6841F' }} />
                        </div>

                        :
                        <p>{item}</p>
            }

            {
                item === "Treatments" || item === "Dental Plans" 
                    ?
                    <KeyboardArrowDown style={{ fill: '#F6841F' }} />
                    :
                    null
            }
            {
                item === "Find a Clinic" || item === "Help ?" || item === "Book Appointment"
                    ?
                    null
                    :
                    <>
                        &nbsp; |
                    </>
            }


        </div>

    )
}
export default NavList;