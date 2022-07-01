import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-page-rt">
            <div className='card-rt'>
                <div className='header'>
                </div>
                <div className='body'>
                    <h2>Welcome to New Moon!</h2>
                    <p>
                        By using New Moon, you agree to the <a href="#">Terms of Service.</a>
                    </p>
                    <div className='agree'>
                        <input type="checkbox" />
                        <span>I Agree</span>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-4'></div>
                        <div className='col-sm-6 col-8 go' onClick={() => navigate('/home')}>
                            <span>Let's go</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;