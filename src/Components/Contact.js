import React, { Component } from "react";
import emaillogo from "../email2.svg";

export default class Contact extends Component {
  render() {
    const sendEmail = (e) => {
      e.preventDefault();
    };
    return (
      <>
        <h1 className="form-title">Contact Me</h1>

        <div className="contact-container">
          <div className="left-contact-form">
            <p className="title-imageme title-separation  ">
              {" "}
              Have a question or wanna talk ?{" "}
            </p>

            <div className="form-container">
              <form
                className="form__group field"
                // action="https://script.google.com/macros/s/AKfycbx70LUX-uYZ25YnzPyEb3j5ApV3pyXjiJCsI77w/exec"
                // method="post"
              >
                <input
                  className="input-form input-separation"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />

                <input
                  className="input-form input-separation"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
                <input
                  className="input-form input-separation"
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  required
                />

                <button
                  type="submit"
                  style={{ "font-size": "1.8em" }}
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>

          <div className="right-contact-vector">
            <img className="image-email" alt="form" src={emaillogo} />
          </div>
        </div>
      </>
    );
  }
}
