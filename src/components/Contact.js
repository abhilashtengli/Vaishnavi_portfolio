import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(true);
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form values
    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());

    // Validate form fields
    const errors = {};
    if (!values.user_name) {
      errors.user_name = "Required";
      // console.log("required");
    }
    if (!values.user_email) {
      errors.user_email = "Required";
      // console.log("required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
    ) {
      errors.user_email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
      // console.log("required");
    }

    if (Object.keys(errors).length !== 0) {
      return;
    }

    // If no errors, send the email
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSentMessage(true);
          setShow(true);
          setTimeout(() => {
            setSentMessage(false);
            setShow(false);
          }, 5000);

          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="mt-9 pb-5">
        <div className="py-12 lg:pl-44 lg:pr-32 flex justify-center items-center ">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial state, offscreen
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to view when inView is true
            transition={{ duration: 0.7 }} // Consistent duration
            className=" border w-80 lg:w-96 px-5 border-[#2fbf71] shadow-[0_2px_20px_rgba(47,_191,_113,_0.4)]
  lg:px-10 py-5 rounded-lg"
          >
            {show ? (
              <h1
                className={` ${
                  sentMessage ? "bg-[#2fbf71]" : "bg-red-500"
                }  rounded-lg w-full py-1 mb-5 text-white font-semibold text-lg text-center`}
              >
                {sentMessage ? "Message sent ✅" : "Message Not Sent !"}
              </h1>
            ) : (
              ""
            )}
            <h2 className="text-xl font-bold mb-4 text-[#2fbf71] text-center animate-bottom-to-top">
              Contact Me
            </h2>

            <Formik
              initialValues={{
                user_name: "",
                user_email: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.user_name) {
                  errors.user_name = "Required";
                }
                if (!values.user_email) {
                  errors.user_email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.user_email
                  )
                ) {
                  errors.user_email = "Invalid email address";
                }
                if (!values.message) {
                  errors.message = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  resetForm();
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label
                      htmlFor="user_name"
                      className="block font-medium mb-1 pl-1 text-[#2fbf71] animate-bottom-to-top"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="user_name"
                      className="form-input w-full border p-1 px-2 border-[#2fbf71] rounded-lg animate-bottom-to-top"
                    />

                    <ErrorMessage
                      name="user_name"
                      component="div"
                      className="text-red-600 pl-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="user_email"
                      className="block font-medium mb-1 pl-1 text-[#2fbf71] animate-bottom-to-top"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="user_email"
                      className="form-input w-full  p-1 px-2 border border-[#2fbf71] rounded-lg animate-bottom-to-top"
                    />
                    <ErrorMessage
                      name="user_email"
                      component="div"
                      className="text-red-600 pl-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block font-medium mb-1 pl-1 text-[#2fbf71] animate-bottom-to-top"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      className="form-textarea w-full  p-1 px-2 border border-[#2fbf71] rounded-lg animate-bottom-to-top"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 pl-1"
                    />
                  </div>
                  <div className="flex justify-center">
                    <motion.button
                      className="px-5 py-1  mt-8 relative rounded-sm text-sm hover:shadow-2xl hover:shadow-green-600/[0.5] transition duration-200 border-2 border-white"
                      whileTap={{
                        scale: "0.8",
                      }}
                      whileHover={{
                        scale: "0.95",
                      }}
                      disabled={isSubmitting}
                      type="submit"
                      value="Send"
                    >
                      <div className="absolute inset-x-0 h-[2px] mx-auto  -bottom-[2px] shadow-2xl  bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                      <span className=" text-white text-lg">Submit</span>
                    </motion.button>
                  </div>
                </Form>
              )}
            </Formik>
            <h1 className="text-center text-xs mt-5 text-[#2fbf71]">
              Email : akkannavaishnavi@gmail.com
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
