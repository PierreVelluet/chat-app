import React from 'react';
import './Contact.css'

function Contact (props) {

    const online = props.online;
    return (
        <div className='Contact'>
            <img src={props.avatar} className='avatar'/>
            <div>
                <p className='name'>{props.name}</p>
                <div className='status'>
                    <div className={online? 'status-online' : 'status-offline'}></div>
                    <p className='status-text'>{online? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;