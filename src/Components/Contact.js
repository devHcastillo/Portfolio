import React, { Component } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default class Contact extends Component {
  render() {
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "gmail",
          "template_jv7tayo",
          e.target,
          "user_YCmx7iBMOeSv1hTWXQZwK"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Message sent",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              title: "Error!",
              text: "Try Again!",
              icon: "error",
              confirmButtonText: "Close",
            });
          }
        );
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
                onSubmit={sendEmail}
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

                {/* <button type="submit" style={{ "font-size": "1.8em" }}>
                  Send Email
                </button> */}
                <input
                  className="button-email"
                  type="submit"
                  value="Send Message"
                ></input>
              </form>
            </div>
          </div>

          <div className="right-contact-vector"></div>
        </div>
      </>
    );
  }
}
