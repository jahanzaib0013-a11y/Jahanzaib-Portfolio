import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
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
          to_email: "jahanzaib0013@gmail.com",
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

  const EMAIL = "jahanzaib0013@gmail.com";
  // TODO: set your real phone number (international format, no spaces) to enable Call & WhatsApp
  const PHONE = "";
  const meetBody = encodeURIComponent(
    "Hi Jahanzaib,\n\nI'd like to book an interview. A few times that work for me:\n- \n- \n\nLooking forward to it!"
  );
  const meetHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Interview request (Google Meet)")}&body=${meetBody}`;
  const zoomHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Interview request (Zoom)")}&body=${meetBody}`;

  const Icon = ({ d }) => (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>{d}</svg>
  );

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.85] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='mt-3 text-secondary text-[15px] leading-[24px]'>
          Hiring or want to work together? Pick whatever's easiest.
        </p>

        {/* three quick options */}
        <div className='mt-8 flex flex-col gap-4'>
          {/* Book an interview */}
          <div className='p-5 rounded-xl bg-tertiary border border-white/5'>
            <div className='flex items-center gap-4'>
              <span className='w-11 h-11 rounded-xl bg-[#915eff]/15 flex items-center justify-center text-[#00cea8]'>
                <Icon d={<><rect x='2' y='6' width='14' height='12' rx='2'/><path d='M16 10l6-3v10l-6-3'/></>} />
              </span>
              <div>
                <p className='text-white font-semibold text-[16px]'>Book an Interview</p>
                <p className='text-secondary text-[13px]'>Google Meet or Zoom — I'll send a calendar invite.</p>
              </div>
            </div>
            <div className='mt-4 flex flex-wrap gap-3'>
              <a href={meetHref} className='flex items-center gap-2 px-4 h-10 rounded-full bg-[#915eff] text-white text-[13.5px] font-semibold transition-transform hover:scale-105'>
                <span className='w-2 h-2 rounded-full bg-green-300'/> Google Meet
              </a>
              <a href={zoomHref} className='flex items-center gap-2 px-4 h-10 rounded-full bg-white/10 border border-white/15 text-white text-[13.5px] font-semibold transition-colors hover:bg-white/20'>
                <span className='w-2 h-2 rounded-full bg-[#2D8CFF]'/> Zoom
              </a>
            </div>
          </div>

          {/* Email */}
          <a href={`mailto:${EMAIL}`} className='group flex items-center gap-4 p-5 rounded-xl bg-tertiary border border-white/5 transition-colors hover:border-[#915eff]/60'>
            <span className='w-11 h-11 shrink-0 rounded-xl bg-[#915eff]/15 flex items-center justify-center text-[#00cea8]'>
              <Icon d={<><rect x='2' y='4' width='20' height='16' rx='2'/><path d='M2 7l10 6 10-6'/></>} />
            </span>
            <div className='min-w-0'>
              <p className='text-white font-semibold text-[16px]'>Email Me</p>
              <p className='text-secondary text-[13px] truncate group-hover:text-white transition-colors'>{EMAIL}</p>
            </div>
            <span className='ml-auto text-[#00cea8] text-[18px] opacity-0 group-hover:opacity-100 transition-opacity'>→</span>
          </a>

          {/* Call / WhatsApp */}
          <div className='flex items-center gap-4 p-5 rounded-xl bg-tertiary border border-white/5'>
            <span className='w-11 h-11 shrink-0 rounded-xl bg-[#915eff]/15 flex items-center justify-center text-[#00cea8]'>
              <Icon d={<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'/>} />
            </span>
            <div className='min-w-0'>
              <p className='text-white font-semibold text-[16px]'>Call or WhatsApp</p>
              {PHONE ? (
                <p className='text-secondary text-[13px]'>{PHONE}</p>
              ) : (
                <p className='text-secondary text-[13px]'>Available on request</p>
              )}
            </div>
            {PHONE && (
              <div className='ml-auto flex gap-2'>
                <a href={`tel:${PHONE}`} title='Call' className='w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#915eff] transition-colors text-[13px]'>Call</a>
                <a href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}`} target='_blank' rel='noreferrer' title='WhatsApp' className='w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors'>
                  <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'><path d='M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.45-.14-.64.15-.19.28-.73.93-.9 1.12-.16.19-.33.21-.61.07-1.68-.84-2.78-1.5-3.89-3.4-.29-.5.29-.47.84-1.56.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.54-.33z'/></svg>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className='flex items-center gap-4 my-8'>
          <span className='flex-1 h-px bg-white/10'/>
          <span className='text-secondary text-[12px] uppercase tracking-wider'>or send a message</span>
          <span className='flex-1 h-px bg-white/10'/>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8'
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
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");