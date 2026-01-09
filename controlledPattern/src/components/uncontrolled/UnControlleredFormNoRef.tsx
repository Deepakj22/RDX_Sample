import React from 'react'
import './UserForm.css';

const UnControlleredFormNoRef : React.FC = () => {

    const handleSubmit=(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        // const formData = new FormData(e.currentTarget);
        // const name = formData.get("name") as string;
        // const email = formData.get("email") as string;
        // const message = formData.get("message") as string;

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log("form submitted!:",data);
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
        name="name"
        placeholder="e.g. Alex Johnson"
        required
      />
    </div>

    {/* Input Group: Email */}
    <div className="input-group" style={{fontFamily:"sans-serif"}}>
      <label htmlFor="email">Email Address</label>
      <input 
        name="email"
        placeholder="alex@example.com"
        required
      />
    </div>

    {/* Input Group: Message */}
    <div className="input-group" style={{fontFamily:"sans-serif"}}>
      <label htmlFor="message">Message</label>
      <textarea 
        name="message"
        placeholder="How can we help you?"
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

export default UnControlleredFormNoRef
