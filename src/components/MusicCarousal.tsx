
import { musicData } from "./profile/MusicProfile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export function MusicCarousal() {
    return (
        <Carousel className="relative z-50">
            <CarouselContent>
                {musicData.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2"
                    >
                        <div className='flex flex-col gap-2'>
                            <iframe src={item.src}
                                title="YouTube video player"
                                className='h-[300px] w-full rounded-lg'
                            >
                            </iframe>
                            <div className='flex flex-col text-center md:text-left'>
                                <span className='text-xl'>
                                    {item.title}
                                </span>
                                <span className='text-gray-500'>
                                    {item.desc}
                                </span>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
