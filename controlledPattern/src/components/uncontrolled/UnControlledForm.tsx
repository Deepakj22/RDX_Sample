import React, { useRef } from 'react'
import './UserForm.css';

const UnControlledForm :React.FC= () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit=(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;

        if(!name){
            nameRef.current?.focus();
            return;
        }
        if(!email ||!email.includes("@")){
            emailRef.current?.focus();
            return;
        }
        if(!message){
            messageRef.current?.focus();
            return;
        }
        console.log("form submitted!:",{name,email,message});
    }

  return (
     <div className="form-container">
  <form onSubmit={handleSubmit} className="react-form">
    <div className="form-header">
      <h2 style={{fontFamily:"sans-serif"}}>Send a Message</h2>
      <p style={{fontFamily:"sans-serif"}}>We'll get back to you within 24 hours.</p>
    </div>

    {/* Input Group: Name */}
    <div className="input-group">
      <label htmlFor="name" style={{fontFamily:"sans-serif"}}>Full Name</label>
      <input 
        type="text" 
        ref={nameRef}
        placeholder="e.g. Alex Johnson"
      />
    </div>

    {/* Input Group: Email */}
    <div className="input-group" style={{fontFamily:"sans-serif"}}>
      <label htmlFor="email">Email Address</label>
      <input 
        type="email" 
         ref={emailRef}
        placeholder="alex@example.com"
      />
    </div>

    {/* Input Group: Message */}
    <div className="input-group" style={{fontFamily:"sans-serif"}}>
      <label htmlFor="message">Message</label>
      <textarea 
        ref={messageRef}
        placeholder="How can we help you?"
        rows={5}
      />
    </div>

    <button type="submit" className="submit-btn">
      Send Message
    </button>
  </form>
</div>
  )
}

export default UnControlledForm
