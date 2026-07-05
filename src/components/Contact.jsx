import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jahanzaib",
          from_email: form.email,
          to_email: "Jahanzaib9599@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto flex flex-col justify-center gap-5'
      >
        <div className='relative overflow-hidden bg-black-100 rounded-2xl p-8 border border-white/5'>
          <div className='absolute top-[-40%] right-[-20%] w-[300px] h-[300px] rounded-full bg-[#915eff] opacity-20 blur-[80px] pointer-events-none' />
          <h3 className='text-white font-bold text-[24px] relative z-10'>Let's build something together</h3>
          <p className='text-secondary text-[15px] mt-3 leading-[24px] relative z-10'>
            Based in Gujranwala, Pakistan — open to onsite work in Lahore and remote roles.
            Drop a message and I'll get back to you.
          </p>

          <div className='mt-8 flex flex-col gap-4 relative z-10'>
            <a href='mailto:jahanzaib9599@gmail.com'
              className='flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-white/5 transition-colors hover:border-[#915eff]/60'>
              <span className='w-10 h-10 rounded-full bg-[#915eff]/20 flex items-center justify-center text-[18px]'>✉️</span>
              <div>
                <p className='text-secondary text-[12px]'>Email</p>
                <p className='text-white text-[14px] font-medium'>jahanzaib9599@gmail.com</p>
              </div>
            </a>
            <a href='https://github.com/jahanzaib0013-a11y' target='_blank' rel='noreferrer'
              className='flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-white/5 transition-colors hover:border-[#915eff]/60'>
              <span className='w-10 h-10 rounded-full bg-[#915eff]/20 flex items-center justify-center'>
                <img src={github} alt='' className='w-5 h-5 object-contain' />
              </span>
              <div>
                <p className='text-secondary text-[12px]'>GitHub</p>
                <p className='text-white text-[14px] font-medium'>jahanzaib0013-a11y</p>
              </div>
            </a>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-white/5'>
              <span className='w-10 h-10 rounded-full bg-[#915eff]/20 flex items-center justify-center text-[18px]'>📍</span>
              <div>
                <p className='text-secondary text-[12px]'>Location</p>
                <p className='text-white text-[14px] font-medium'>Gujranwala, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");