import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";
import { sectionWrapper } from "../hoc";
import { ContactBg } from "../assets/index.js";

const Contact = ({darkThemeEnabled}) => {
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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "kushagra",
          from_email: form.email,
          to_email: "kushagradev3204@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
      className={`xl:mt-12 flex-row flex overflow-hidden`}
    >
      <motion.div
        variants={fadeIn("left", "spring", 0.1, 1)}
        className={`flex-col flex-1 ${darkThemeEnabled?'bg-black-100 text-white':'bg-[#eaefcf] text-slate-800'} xl:p-8 lg:p-8 sm:p-8 md:p-8 xs:p-4 p-4 rounded-2xl`}
      >
        <p className={`${styles.sectionSubText} xl:relative lg:relative md:relative absolute`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} xl:relative xl:mt-0 lg:relative lg:mt-0 md:relative md:mt-0 absolute mt-5`}>Contact.</h3>
          <div className="flex justify-end items-center">
          <img src={ContactBg} className="sm:h-20 xs:h-14 h-10 md:hidden lg:hidden xl:hidden"/>
          </div>   
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`mt-8 flex flex-col gap-4`}
        >
          <label className='flex flex-col lg:text-[14px] sm:text-[13px] xs:text-[13px] text-[12px]'>
            <span className='font-medium mb-4'>Your Name</span>
            <input
              required
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`${darkThemeEnabled?'bg-tertiary text-white':'bg-[#f5f7e7] text-slate-600'} xl:py-4 lg:py-4 sm:py-4 md:py-4 xs:py-2 py-2 xl:px-6 lg:px-6 sm:px-6 md:px-6 xs:px-4 px-4 placeholder:text-secondary rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col lg:text-[14px] sm:text-[13px] xs:text-[13px] text-[12px]'>
            <span className='font-medium mb-4'>Your email</span>
            <input
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email-ID?"
              className={`${darkThemeEnabled?'bg-tertiary text-white':'bg-[#f5f7e7] text-slate-600'} xl:py-4 lg:py-4 sm:py-4 md:py-4 xs:py-2 py-2 xl:px-6 lg:px-6 sm:px-6 md:px-6 xs:px-4 px-4 placeholder:text-secondary rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col lg:text-[14px] sm:text-[13px] xs:text-[13px] text-[12px]'>
            <span className='font-medium mb-4'>Your Message</span>
            <textarea
              required
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`${darkThemeEnabled?'bg-tertiary text-white':'bg-[#f5f7e7] text-slate-600'} xl:py-4 lg:py-4 sm:py-4 md:py-4 xs:py-2 py-2 xl:px-6 lg:px-6 sm:px-6 md:px-6 xs:px-4 px-4 placeholder:text-secondary rounded-lg outline-none border-none font-medium resize-none`}
            />
          </label>
          <button
            type='submit'
            className={`${darkThemeEnabled?'bg-tertiary':'bg-[#f5f7e7]'} py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary lg:text-[14px] sm:text-[13px] xs:text-[13px] text-[12px]`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 0.1, 1)}
        className='flex-1 xl:h-auto md:h-[550px] h-[350px] md:block hidden'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact,"contact")