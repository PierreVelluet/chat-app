import React from 'react';
import './Contact.css'

function Contact () {

    const online = true;
    return (
        <div className='Contact'>
            <img src='https://randomuser.me/api/portraits/men/95.jpg' className='avatar'/>
            <div>
                <p className='name'>Pierrot Leboss</p>
                <div className='status'>
                    <div className={online? 'status-online' : 'status-offline'}></div>
                    <p className='status-text'>{online? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;