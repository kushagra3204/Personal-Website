import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const sectionWrapper = (Component, idName) => {
    // HOC accepts props
    return function HOC(props) {
        // Pass props to the wrapped component
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}></span>
                {/* Pass all props to the wrapped component */}
                <Component {...props} />
            </motion.section>
        );
    };
};

export default sectionWrapper;
