import { MotionConfig, motion } from "framer-motion";

type ClickHandler = React.MouseEventHandler<HTMLElement>;

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
  }

function Hamburger({active, setActive}: Props){
    const handleClick: ClickHandler = () => {
      setActive((prevValue) => !prevValue);
  };

    return(
        <div style={{zIndex: 20}}><MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
            <motion.button
              initial={false}
              onClick={handleClick}
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
          </MotionConfig></div>
    )
}

export default Hamburger;
