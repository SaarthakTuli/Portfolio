import { styles } from "../styles.js";

import SectionWrapper from "../hoc/SectionWrapper";

import { contactLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex flex-col items-center py-5 gap-y-5 bg-primary`}
    >
      <div
        className="w-full flex justify-center items-center max-w-7xl mx-auto flex-col"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="w-[2px] h-[20px] bg-secondary" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          Scroll to Top{" "}
        </p>{" "}
      </div>{" "}
      <div className="flex gap-x-10 flex-wrap gap-y-5 justify-center sm:-mb-14">
        {" "}
        {contactLinks.map((contact) => (
          <a
            key={contact.href}
            href={contact.href}
            className="border green-pink-gradient rounded-xl shadow-card p-[1px]"
            target="_blank"
          >
            <p className="flex gap-x-2 items-center bg-tertiary px-4 py-1 rounded-xl">
              {" "}
              {<contact.icon />} {contact.name}{" "}
            </p>{" "}
          </a>
        ))}{" "}
      </div>{" "}
    </footer>
  );
};

export default SectionWrapper(Footer, "contact");
