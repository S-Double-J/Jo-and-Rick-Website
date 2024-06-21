import { motion } from "framer-motion";
import { useState } from "react";
import Menu from "../HamburgerMenu";

function Hamburger() {
    const [active, setActive] = useState(false);
  return (
    <>
      <motion.button
        initial={false}
        onClick={() => setActive((prevValue) => !prevValue)}
        className="hamburger"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          className="hamburger-span"
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          className="hamburger-span"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="hamburger-span"
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </>
  );
}

export default Hamburger