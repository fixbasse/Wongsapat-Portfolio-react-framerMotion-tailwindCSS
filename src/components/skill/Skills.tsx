import { Backend_skill, Frontend_skill } from '../../data';
import SkillProvider from './SkillProvider';

const Skills = () => {
    return (

        <div
            id='skills'
            style={{ transform: 'scale(0.9)' }}
            className='scrollSnapContainer flex flex-col items-center justify-center gap-20'
        >
            <h1 className='text-6xl text-center'>
                And I learn some more stack.
            </h1>
            <div className='flex items-center gap-8'>
                {Frontend_skill.map((image, index) => (
                    <SkillProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex items-center gap-8'>
                {Backend_skill.map((image, index) => (
                    <SkillProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills