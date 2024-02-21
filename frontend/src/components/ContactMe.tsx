import styled from 'styled-components';

const ContactMe = () => {
  return (
    <ContactMeOuter>
      <TitleWrapper>
        <Title id="contactme">Contact Me!</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
      <FormWrapper>
        <FormComponent />
        <FormSide />
      </FormWrapper>
    </ContactMeOuter>
  );
};

export default ContactMe;

const ContactMeOuter = styled.div`
  background-color: var(--light-black-background-color);
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 1000px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  font-weight: bold;
  color: var(--white);
  position: relative;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const FormComponent = () => {
  return (
    <FormComponentOuter>
      <FormComponentWrapper
        action="https://formspree.io/your@email.com"
        method="POST"
      >
        <FormComponentElement>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" required />
        </FormComponentElement>
        <FormComponentElement>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="_replyto" required />
        </FormComponentElement>
        <FormComponentElement>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea id="message" name="message" required />
        </FormComponentElement>
      </FormComponentWrapper>
    </FormComponentOuter>
  );
};

const FormComponentOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormComponentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormComponentElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label``;

const FormInput = styled.input``;

const FormTextarea = styled.textarea`
  resize: none;
`;

const FormSide = () => {
  return (
    <FormSideOuter>
      <FormSideTitle>Let's talk how I can help you!</FormSideTitle>
      <FormSideBody>
        <FormSideBodyElement>
          If you like my work and want to avail my services then drop me a
          message using the contact form.
        </FormSideBodyElement>
        <FormSideBodyElement>
          Or get in touch using my email, skype or my contact number.
        </FormSideBodyElement>
        <FormSideBodyElement>See you.</FormSideBodyElement>
      </FormSideBody>
    </FormSideOuter>
  );
};

const FormSideOuter = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
`;

const FormSideTitle = styled.h1`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
  color: var(--white);
`;
const FormSideBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormSideBodyElement = styled.p`
  color: var(--white);
`;
