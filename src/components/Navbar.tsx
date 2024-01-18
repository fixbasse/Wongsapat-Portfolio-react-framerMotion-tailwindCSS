
import { BsDiscord, BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between w-full text-white fixed top-0 h-[60px] z-50 px-20 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md'>
            <section className='flex-1'>
                <a href="#hero">
                    ActivePeople
                </a>
            </section>

            <section className='flex-1 flex items-center justify-between border border-[#7042f861] bg-[#0300145e] py-2 px-8 rounded-2xl'>
                <a href='#aboutMe'>
                    About me
                </a>
                <a href='#skills'>
                    Skills
                </a>
                <a href='#projects'>
                    Projects
                </a>
            </section>

            <section className='flex-1 flex justify-end gap-6'>
                <FaFacebook size={30} />
                <BsInstagram size={30} />
                <BsDiscord size={30} />
            </section>
        </nav>
    )
}

export default Navbar