import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="contact-div1">
      <div className="contact-div2">
        <div className="contact-div3">
          <h1 className="contact-h1-1">
            Contact Us
          </h1>
          <p className="contact-p-1">
            Feel free to contact us if you have any questions or need
            assistance.
          </p>
        </div>
        <div className="contact-div4">
          <div className="contact-div5">
            <div className="contact-div6">
              <div className="contact-div7">
                <label htmlFor="name" className="contact-label-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input-1"
                />
              </div>
            </div>
            <div className="contact-div8">
              <div className="contact-div9">
                <label htmlFor="email" className="contact-label-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input-2"
                />
              </div>
            </div>
            <div className="contact-div10">
              <div className="contact-div11">
                <label
                  htmlFor="message"
                  className="contact-label-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="contact-div12">
              <button className="contact-btn-1">
                Submit
              </button>
            </div>
            <div className="contact-div13">
              <Link href="mailto:jamilraza001@gmail" className="contact-email-link">
                jamilraza001@gmail.com
              </Link>
              <p className="contact-phone-link">0310-3118833</p>
              <span className="contact-div14">
                <Link
                  href={"https://www.linkedin.com/in/jamilrazaa"}
                  target="_blank"
                  className="contact-btn-4"
                >
                  <FaLinkedin />
                </Link>
                <Link href={"https://www.instagram.com/jamilraza001/"} target="_blank" className="contact-btn-2">
                  <FaInstagramSquare />
                </Link>
                <Link href={"https://github.com/JamilRaza001"} target="_blank" className="contact-btn-3">
                  <FaSquareGithub />
                </Link>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
