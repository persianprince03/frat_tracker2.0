import coa from '../assets/logo.png'
import './web_header.css'
import {useNavigate} from "react-router-dom";
export default function Web_Header() {
    const navigate = useNavigate();
    return (
        <div className='WebHeader'>
        <>
            {/*TODO link the Coat of Arms to the main menu*/}
            <img onClick={navigate('/main')} src={coa} alt='Coat of Arms' />

        </>
        </div>
    );
}

