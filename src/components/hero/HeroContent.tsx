import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex md:gap-20 w-full md:px-20'>

            {/* LEFT */}
            <motion.section
                className='flex flex-col items-center md:items-start text-center md:text-left gap-4 z-50 md:flex-1'
            >
                <motion.div
                    variants={slideInFromTop}
                    className='flex items-center gap-2 p-1 rounded-full opacity-[0.9]'
                >
                    <SparklesIcon
                        className='h-10 w-10'
                    />
                    <h4 className='text-sm'>
                        FrontEnd Developer Portfolio
                    </h4>
                </motion.div>

                <motion.div
                    className='text-6xl md:text-7xl font-bold'
                    variants={slideInFromLeft(0.5)}
                >
                    <div>
                        Welcome to
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> my world</span>
                    </div>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-justify'
                >
                    My name is
                    <span className='px-2 font-bold text-xl'>
                        Fix Wongsapat Sungsean.
                    </span>
                    I'm a musician and a frontend developer primarly in MERN stack and Next.js.
                    My journey start from music career and then frontend development designing UI and start to explore the backend part for improving my knowledge.
                    Check out my project and skills!
                </motion.p>

                {/* <motion.div
                    variants={slideInFromLeft(1)}
                    className='py-2 border  text-white w-[200px] flex items-center justify-center rounded-lg cursor-pointer hover:opacity-80'
                >
                    Learn more!
                </motion.div> */}
            </motion.section>




            {/* RIGHT */}
            <motion.section
                className='z-50 hidden md:block md:flex-1'
                variants={slideInFromRight(0.8)}
            >
                <img
                    src="/mainIcondark.svg"
                    alt="hero"
                    className='w-full h-full opacity-0'
                />
            </motion.section>

        </motion.div>
    )
}

export default HeroContent
// border-[#7042f88b]