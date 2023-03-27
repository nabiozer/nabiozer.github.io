import React, { useRef } from "react";
import useForm from "../../_common/_hooks/useForm";
import AnimatedText from "../../_components/App/AnimatedText";
import Button from "../../_components/Form/Button/Button";
import Input from "../../_components/Form/Input";
import emailjs from "@emailjs/browser";
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import toastMessage from "../../_components/Display/Notification/toastMessage";


export type MailStateType = {
  name: string;
  subject: string;
  email: string;
  message: string;
};
export const MailStateDefaultValue: MailStateType = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export default () => {
     
     const form = useRef<any>();
     const history = useHistory();

  const { control, errors,handleSubmit } = useForm({
    defaultValues: MailStateDefaultValue,
    validationSchema: {
      name: yup.string().typeError('Enter Name').required('Enter Name'),
      email: yup.string().typeError('Enter E-Mail').required('Enter E-Mail'),
      subject: yup.string().typeError('Enter Subject').required('Enter Subject'),
      message: yup.string().typeError('Enter Message').required('Enter Message'),
    },
  });
 

  const sendEmail = async () => {
  

   const res = await emailjs.sendForm(
        "service_tzkej4p",
        "template_4ogvfmo",
        form.current,
        "dSIDsnLqqPnvC_491"
      )
    
      if(res.status === 200) {
        toastMessage({
          message:'Mail başarıyla gönderildi',
          messageType:'success'
        })
        history.push('/')
      }
   
      
      
  };
  return (
    <section className="contactcontainer fullscreen" id="contact">
      <div className="contactform-container">
        <AnimatedText
          header="Contact me"
          desc=" I'm interested in all opportunities where I can improve myself and keep up to date.
        I am also open to freelance website and photography video works."
        />
        <div className="contactform">
          <form  ref={form} onSubmit={handleSubmit(sendEmail)}  >
            <div>
              <Input
                id="name"
                name="name"
                label="Name"
                type="text"
                control={control}
                errors={errors}
              />
            </div>

            <div>
              <Input
                id="email"
                name="email"
                label="E-Mail"
                type="e-mail"
                control={control}
                errors={errors}
              />
            </div>
            <div>
              <Input
                id="subject"
                name="subject"
                label="Subject"
                type="text"
                control={control}
                errors={errors}
              />
            </div>
            <div>
              <Input
                id="message"
                name="message"
                label="Message"
                type="text"
                multiline
                rows="5"
                control={control}
                errors={errors}
              />
            </div>
            <Button
              type="submit"
              className="custom-button"
              loading={false}
              text="Send an E-mail   "
              iconRight={<i className="fa-regular fa-paper-plane"></i>}
            />
          </form>
        </div>
      </div>
      
    </section>
  );
};
