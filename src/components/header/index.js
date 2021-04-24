import React, {useState} from 'react';
import './styles.css';
import logo from '../../assets/logo.jpg';

const Header = () => {

    const [address, setaddress] = useState('0x0');

    return (
        <div className='header textStyle'>
            <div>
                <img className='logo' src={logo}  />
                <text>Find The Waifus</text>
            </div>
            <text className='smallerText'>Address :- {address}</text>
        </div>
    )
}

export default Header
