import ProjectCard from "./ProjectCard"
import { ProjectCarousel } from "../ProjectCarousal";

export const projectData = [
    {
        src: "/khonkan.jpeg",
        title: "Musician Portfolio",
        description: "Weeris Visvanichkul is a bass player, a double bass player and also a cat person. With 10 years of musician experienced from playing at night club to teaching.",
        href: 'https://weerisprofile-5c610.web.app/?fbclid=IwAR1iyWw1UpV8LUgKni9jMYg8J7o79kPwUn2TnAPL4dY2e7eWJbeLtFL8lH8'
    },
    {
        src: "/bnbImg.png",
        title: "Bnb Clone NextJS",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, nam nostrum, corporis minima dolor excepturi aliquid cum, sit et hic debitis dolorum molestias suscipit dicta voluptatibus maiores. Ullam, quisquam illum.",
        href: 'https://bnb-next-auth-prisma.vercel.app/'
    },
    {
        src: "/bnbImg.png",
        title: "Fiver Clone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, nam nostrum, corporis minima dolor excepturi aliquid cum, sit et hic debitis dolorum molestias suscipit dicta voluptatibus maiores. Ullam, quisquam illum."
    }
]


const Projects = () => {
    const openTap = () => {
        window.open('https://weerisprofile-5c610.web.app/?fbclid=IwAR1iyWw1UpV8LUgKni9jMYg8J7o79kPwUn2TnAPL4dY2e7eWJbeLtFL8lH8')
    };

    const openTap2 = () => {
        window.open('https://bnb-next-auth-prisma.vercel.app/')
    }


    return (
        <div className="h-[100dvh] md:px-20 flex flex-col gap-4 md:gap-20 items-center justify-center z-10 relative">
            <h1
                className="font-semibold p-2 text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                My Web Development Projects
            </h1>

            <div className="md:hidden">
                <ProjectCarousel
                
                />
            </div>


            <section
                className="hidden md:grid grid-cols-2 gap-8">
                <ProjectCard
                    openTap={openTap}
                    src="/khonkan.jpeg"
                    title="Musician Portfolio"
                    description="Weeris Visvanichkul is a bass player, a double bass player and also a cat person. With 10 years of musician experienced from playing at night club to teaching."
                />
                <ProjectCard
                    openTap={openTap2}
                    src="/bnbImg.png"
                    title="Bnb Clone NextJS"
                    description="Air Bnb clone using nextJS as a framework, tailwindCss for styling, nextAuth for authentication, prisma for managing database and mongoDB for database."
                />
            </section>
        </div>
    )
}

export default Projects