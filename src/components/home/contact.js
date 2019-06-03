import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="section_title">
        <h2>Contact</h2>
        <p>I am open to opportunities.</p>
      </div>
      <div className="contact_social_icons">
        <a
          href="https://www.linkedin.com/in/gabriel-samaniego/"
          target="_blank"
          rel="noopener noreferrer"
          className="social_icon"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          href="https://github.com/gsamaniego41"
          target="_blank"
          rel="noopener noreferrer"
          className="social_icon"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
      <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
        <input name="bot-field" type="text" className="honeypot" />
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
        <p>Required*</p>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
