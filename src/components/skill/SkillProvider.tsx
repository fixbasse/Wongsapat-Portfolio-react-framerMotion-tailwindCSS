
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillsProviderProps {
    src: string;
    width?: number;
    height?: number;
    index: number;
};

const SkillProvider = ({
    src,
    width,
    height,
    index
}: SkillsProviderProps) => {
    const { ref, inView } = useInView({
        triggerOnce: false
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const animationDelay = 0.2;
    return (
        <motion.div
            ref={ref}
            initial='hidden'
            variants={imageVariants}
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <img
                src={src}
                width={width}
                height={height}
                alt="/"
            />
        </motion.div>
    )
}

export default SkillProvider