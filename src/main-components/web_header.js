import React from 'react';
import { useNavigate } from "react-router-dom";
import './web_header.css'
import coa from '../assets/logo.png';

export default function Web_Header() {
    const navigate = useNavigate();

    return (
        <div className='WebHeader'>
            <div>
                {/*TODO link the Coat of Arms to the main menu*/}
                <img onClick={() => navigate('/main')} src={coa} alt='LCA Background' />
            </div>
        </div>
    );
}

