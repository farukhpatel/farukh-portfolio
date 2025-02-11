import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import { useRef } from "react";

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/farukhpatel" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/farukh-patel/" },
    { icon: <FaXTwitter />, url: "https://twitter.com/farukhpatel08" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name) {
      nameRef.current.focus();
      return;
    } else if (!email) {
      emailRef.current.focus();
      return;
    } else if (!message) {
      messageRef.current.focus();
      return;
    }

    // Encode message for mailto
    const subject = encodeURIComponent(`New Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open mail client with pre-filled details
    let url = `https://mail.google.com/mail/?view=cm&fs=1&to=farukhpatel0804@gmail.com?subject=${subject}&body=${body}`;

    window.open(url, "_blank");
  };

  return (
    <motion.section
      className="py-20 bg-background"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl text-left font-bold text-primary mb-12 font-headings"
          >
            Let's Connect
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              className="space-y-6 text-left"
            >
              <div>
                <label className="block text-textSecondary font-para mb-2">
                  Name
                </label>
                <motion.input
                  ref={nameRef}
                  whileFocus={{ borderColor: "#EF4444" }}
                  className="w-full px-4 py-3 bg-secondary rounded-lg border-2 border-gray-800 focus:outline-none focus:border-primary transition-colors text-text"
                />
              </div>

              <div>
                <label className="block text-textSecondary font-para mb-2">
                  Email
                </label>
                <motion.input
                  ref={emailRef}
                  whileFocus={{ borderColor: "#EF4444" }}
                  type="email"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border-2 border-gray-800 focus:outline-none focus:border-primary transition-colors text-text"
                />
              </div>

              <div>
                <label className="block text-textSecondary font-para mb-2">
                  Message
                </label>
                <motion.textarea
                  ref={messageRef}
                  whileFocus={{ borderColor: "#EF4444" }}
                  className="w-full px-4 py-3 bg-secondary rounded-lg border-2 border-gray-800 focus:outline-none focus:border-primary transition-colors text-text h-32"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primarySecondary rounded-lg text-text font-para font-medium"
                onClick={onFormSubmit}
              >
                Send Message
                <TbSend className="text-xl group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center space-y-6 text-center"
            >
              {/* Email */}

              <div className="flex justify-center items-center gap-2 group">
                <FiMail className="text-4xl text-text transition-colors duration-300 group-hover:text-primarySecondary" />
                <p className="text-text font-para text-lg transition-colors duration-300 group-hover:text-primarySecondary">
                  <a
                    href="mailto:farukhpatel0804@gmail.com"
                    className="group-hover:text-primarySecondary"
                  >
                    farukhpatel0804@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-textSecondary hover:bg-primarySecondary transition-colors flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary duration-300"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
