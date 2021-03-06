import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ data }) => {
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

    const onSubmitHandler = async (e) => {
      e.preventDefault();

      const templateParams = {
         from_name: `${name} (${email})`,
         to_name: "Devarsh",
         message: message
       };
   
      const emailResult = await emailjs.send("service_5mnu0qu", "template_ovcvfpr", templateParams, "user_ES8gxT4rYp1cViFmNASTP");
      console.log(emailResult);
      if (emailResult) {
         console.log("your message successfully send to the admin");
      }
      else {
      console.log("something went wrong!");
      }

      setName('');
      setSubject('');
      setEmail('');
      setMessage('');
    }
    

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

                <h1><span>Get In Touch.</span></h1>

            </div>
            <p>Submit your message/inquiry it will directly arrived in my email and I'll get back to you ASAP.</p>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="20" rows="5" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type='submit' onClick={onSubmitHandler} className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.name}<br />
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
