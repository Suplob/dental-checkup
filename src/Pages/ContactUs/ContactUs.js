import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div class="container contact-form">
      <div class="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form>
        <h3>Drop Us a Message</h3>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Your Name *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Your Phone Number *"
                value=""
              />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="btnSubmit"
                class="btn-regular mt-3"
                style={{ width: "82%" }}
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
