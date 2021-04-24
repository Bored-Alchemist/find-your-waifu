import React, {useState} from 'react';
import './styles.css';

const Dashboard = () => {

    const [currentLevel, setcurrentLevel] = useState(1);

    return (
        <div className='mainBody'>
            <div className='leftBar'>
                
            </div>
            <div className='gameBody'>

            </div>
        </div>
    )
}

export default Dashboard
