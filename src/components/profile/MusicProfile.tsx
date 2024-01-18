import { MusicCarousal } from '../MusicCarousal'

export const musicData = [
    {
        title: 'Master Music Recital',
        src: 'https://www.youtube.com/embed/4631sx8CfdY?si=mdM1jkbhpdeDYWlk',
        desc: 'Upright bass playing in the style of Eddie Gomez in the Bill Evans Trio. In this recital'
    },
    {
        title: 'Master Music Recital',
        src: 'https://www.youtube.com/embed/gmrbuoixUV4?si=yNiNp789RI7W_1-P',
        desc: ' Broken-time rhythmic with Thelonious Monk song.'
    },
    {
        title: 'Jazz with "Manora"',
        src: 'https://www.youtube.com/embed/FsUm0Rdds_A?si=W1509mugmwUzvYaR',
        desc: ' Krittanon Master Recital.'
    },
    {
        title: 'Upright bass solo',
        src: 'https://www.youtube.com/embed/ezduscqH2m4?si=daRPX4o0G6m0nTq_',
        desc: 'Inner Urges bass solo.'
    }
]

const MusicProfile = () => {
    return (
        <div className='flex items-center justify-center h-screen md:px-20 relative z-50'>

            <section className='flex flex-col items-center gap-8'>
                <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-2'>
                    My Music Career
                </h1>

                <MusicCarousal />

            </section>
        </div>
    )
}

export default MusicProfile