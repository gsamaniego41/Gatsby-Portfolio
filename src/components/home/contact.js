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
        <a
          href="https://twitter.com/gsamaniego41"
          target="_blank"
          rel="noopener noreferrer"
          className="social_icon"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="bot-field" type="text" className="honeypot" />
        <input name="name" type="text" placeholder="Name*" required />
        {/* <input name="company" type="text" placeholder="Company (Optional)" /> */}
        <input name="email" type="email" placeholder="Email*" required />
        <textarea
          name="message"
          cols="30"
          rows="8"
          placeholder="Message*"
          autoComplete="off"
          spellCheck="false"
          required
        />
        <p>Required*</p>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
