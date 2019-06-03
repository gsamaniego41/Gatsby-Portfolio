import React from "react"

const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="section_title">
        <h2>Contact</h2>
        <p>I am open to opportunities.</p>
      </div>
      <form name="contact" action="post" netlify>
        <input name="name" type="text" placeholder="Name" />
        <input name="company" type="text" placeholder="Company" />
        <input name="email" type="email" placeholder="Email" />
        <textarea name="message" cols="30" rows="10" placeholder="Message" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
