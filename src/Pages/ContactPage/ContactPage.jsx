import React from "react";
import {
  ContactContainer,
  ContactFormBackdrop,
  ContactHeader,
  ContactInfo,
  ContactWrapper,
  FormContainer,
  FormInput,
  InfoContainer,
} from "./ContactPage.style";
import { BsMap, BsTelephoneInbound } from "react-icons/bs";
import CustomBtn from "../../Components/CustomBtn/Custombtn";

function ContactPage() {
  return (
    <ContactWrapper>
      <ContactHeader>
        <h1>Contact me</h1>
      </ContactHeader>
      <ContactContainer>
        <ContactFormBackdrop>
          <FormContainer
            as={"form"}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <FormInput>
                <h3>First Name</h3>
                <input type="text" name="name" />
              </FormInput>
              <FormInput>
                <h3>Last Name</h3>
                <input type="text" name="lastName" />
              </FormInput>
              <FormInput>
                <h3>Company</h3>
                <input type="text" name="company" />
              </FormInput>
              <FormInput>
                <h3>Email</h3>
                <input type="email" name="email" />
              </FormInput>
              <FormInput>
                <h3>Message</h3>
                <textarea rows="10" name="message" />
              </FormInput>
            </div>
            <CustomBtn type="submit">Send</CustomBtn>
          </FormContainer>
          <ContactInfo>
            <InfoContainer>
              <div>
                <p>Let's talk</p>
                <BsTelephoneInbound size={25} />
              </div>
              <h2>+40 757 299 313</h2>
            </InfoContainer>
            <InfoContainer>
              <div>
                <p>Currently in</p>
                <BsMap size={25} />
              </div>
              <h2>Bucharest, Romania</h2>
            </InfoContainer>
          </ContactInfo>
        </ContactFormBackdrop>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default ContactPage;
