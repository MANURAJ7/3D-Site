import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";

//importing animation functions
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    //AnimatePresence is used to animate components when they enter or are removed from the react tree.
    <AnimatePresence>
      {snap.intro && (
        // {...function()} syntax is passing all animation related properties from function() to motion.section as " individual props"
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="head-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET's <br className="x1:block hidden" /> do it
              </h1>
            </motion.div>

            <motion.div {...headContentAnimation} className="gap-5">
              <p className="max-w-md font-normal text-grey-600">
                Create your unique and exclusive shirt with brand new
                customisation tool.
                <strong>Unleash your imagination</strong> and define your own
                style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyle="w-fit px-4 py-2.5 text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
export default Home;
