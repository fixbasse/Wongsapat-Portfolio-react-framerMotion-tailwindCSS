import HeroContent from "./HeroContent"

const Hero = () => {
    return (
        <div
            id="hero"
            className="h-full flex flex-col items-center justify-center relative p-4 md:p-0">
            {/* <video
                autoPlay
                muted
                loop
                className=" rotate-180 absolute top-[-100px] md:top-[-160px] lg:top-[-240px] xl:top-[-340px] 2xl:top-[-580px]">
                <source
                    src="/blackhole.webm"
                    type="video/webm"
                    className=""
                />
            </video> */}
            <div className="absolute w-full h-full bg-gray-800/50 z-50">

            </div>
            <img
                src="/bharat/krishna.png"
                className="w-full h-full absolute object-cover"
                alt="/"
            />

            <HeroContent />
            {/* <Navbar /> */}
            <h2 className="absolute text-white right-0 bottom-0">
                This image is generate by https://gencraft.com/generate
            </h2>
        </div>
    )
}

export default Hero
