import React, { useRef, useState } from 'react'
import './UserForm.css';

//controlled component
const UserForm : React.FC= () => {
    const [form,setForm] = useState({name:"",email:"",message:""});

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value} = e.target;
    setForm({...form,[name]:value});
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
if(!form.name){
    nameRef.current?.focus();
    return;
}
if(!form.email.includes("@")){
    emailRef.current?.focus();
    return;
}
if(!form.message){
    messageRef.current?.focus();
    return;
}
        console.log("form submitted!:",form);
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
        id="name"
        type="text" 
        name="name"
        ref={nameRef}
        value={form.name} 
        placeholder="e.g. Alex Johnson"
        onChange={handleChange}
        required
      />
    </div>

    {/* Input Group: Email */}
    <div className="input-group" style={{fontFamily:"sans-serif"}}>
      <label htmlFor="email">Email Address</label>
      <input 
        id="email"
        type="email" 
        name="email"
        value={form.email}
         ref={emailRef}
        placeholder="alex@example.com"
        onChange={handleChange}
        required
      />
    </div>

    {/* Input Group: Message */}
    <div className="input-group" style={{fontFamily:"sans-serif"}}>
      <label htmlFor="message">Message</label>
      <textarea 
        id="message"
        name="message"
        value={form.message}
            ref={messageRef}
        placeholder="How can we help you?"
        onChange={handleChange}
        rows={5}
        required
      />
    </div>

    <button type="submit" className="submit-btn">
      Send Message
    </button>
  </form>
</div>
  )
}

export default UserForm
