
import { projectData } from "./projects/Projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"


export function ProjectCarousel() {
    return (
        <Carousel className="">
            <CarouselContent>
                {projectData.map((item) => (
                    <CarouselItem
                        key={item.title}>
                        <div
                            onClick={() => window.open(item.href)}
                            className="flex flex-col cursor-pointer">
                            <img
                                src={item.src}
                                alt="projectsImg"
                                className="h-full md:h-[250px] w-full object-cover rounded-lg"
                            />
                            <h2
                                className="text-2xl font-semibold text-center md:text-left">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {item.description}
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
