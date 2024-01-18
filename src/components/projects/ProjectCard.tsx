

interface ProjectsProps {
    src: string;
    title: string;
    description: string;
    openTap?: () => void;
};

const ProjectCard = ({
    src,
    title,
    description,
    openTap,
}: ProjectsProps) => {
    return (
        <div
    
            className="flex flex-col w-full items-center md:items-start gap-2 cursor-pointer relative">
            <img
                onClick={openTap}
                src={src}
                alt="projectsImg"
                className="h-full md:h-[250px] w-full object-cover rounded-lg"
            />

            <h2
                className="text-2xl font-semibold">

                {title}
            </h2>
            <p className="text-gray-500 text-sm">
                {description}
            </p>
        </div>
    )
}

export default ProjectCard