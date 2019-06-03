import React from "react"

const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="section_title">
        <h2>Contact</h2>
        <p>I am open to opportunities.</p>
      </div>
      <form name="contact" action="post" netlify>
        <input name="name" type="text" placeholder="Name*" required />
        <input name="company" type="text" placeholder="Company (Optional)" />
        <input name="email" type="email" placeholder="Email*" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message*"
          required
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
