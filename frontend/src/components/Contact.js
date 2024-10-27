import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <br />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <br />
                <textarea 
                    placeholder="Your Message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                ></textarea>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
