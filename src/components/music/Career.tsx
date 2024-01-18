import SkillProvider from '../skill/SkillProvider'
import { PrevSkill } from '../../data'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';


const Career = () => {
    const ref: any = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])

    return (
        <div
            ref={ref}
            className='flex items-center justify-center h-full p-4 md:px-20 overflow-hidden relative'>

            <section
                className='flex flex-col gap-8'
            >
                <div className='flex justify-center gap-4'>
                    {PrevSkill.map((item, index) => (
                        <SkillProvider
                            key={index}
                            src={item.Image}
                            index={index}
                            width={100}
                            height={100}

                        />
                    ))}
                </div>
                <motion.h2
                    style={{ y: yBg }}
                    className='text-3xl md:text-5xl text-center'
                >
                    I've the knowledge of
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-700 pl-4 font-bold'>
                        HTML and CSS.
                    </span>
                </motion.h2>
            </section>
        </div>
    )
}

export default Career