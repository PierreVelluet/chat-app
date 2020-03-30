import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        }
    }

    changeStatus() {
        const newStatus = !this.state.online
        this.setState({online: newStatus})
    }

    render() {
        const online = this.props.online;


        return (
            <div className='Contact'>
                <img src={this.props.avatar} className='avatar'/>
                <div>
                    <p className='name'>{this.props.name}</p>
                    <div className='status'>
                        <div onClick={this.changeStatus.bind(this)} className={this.state.online? 'status-online' : 'status-offline'}></div>
                        <p className='status-text'>{this.state.online? 'online' : 'offline'}</p>
                    </div>
                </div>
            </div>
        )
    }
    
        
}

export default Contact;