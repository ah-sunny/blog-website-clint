import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div >

            <div className="carousel w-full my-10 z-0 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0B868b9/Content-writing-Blog-Feature-Image.webp" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-xl lg:text-4xl font-bold'>
                                <Typewriter
                                    words={['I am Explorer I am a detective ', ' ..i am scientist.....', 'I am astronaut.......']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p className="text-xs lg:text-lg">There are many variations Type of Blog available, Now you have to choose your best choice . Level up to your Knowledge next-level </p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/allBlog'>View Blogs</Link> </button>
                            </div>
                            <a href="#slide4" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide2" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/C7fnqTg/R.jpg" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-xl lg:text-4xl font-bold'>
                                <Typewriter
                                    words={['I am Explorer I am a detective ', ' ..i am scientist.....', 'I am astronaut.......']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p className="text-xs lg:text-lg">There are many variations Type of Blog available, Now you have to choose your best choice . Level up to your Knowledge next-level </p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/allBlog'>View Blogs</Link> </button>
                            </div>
                            <a href="#slide1" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide3" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Zhcyd5d/R-1.jpg" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-xl lg:text-4xl font-bold'>
                                <Typewriter
                                    words={['I am Explorer I am a detective ', ' ..i am scientist.....', 'I am astronaut.......']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p className="text-xs lg:text-lg">There are many variations Type of Blog available, Now you have to choose your best choice . Level up to your Knowledge next-level </p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/allBlog'>View Blogs</Link> </button>
                            </div>
                            <a href="#slide2" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide4" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G7fFsHv/Sport-Ranking-700x400.jpg" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-xl lg:text-4xl font-bold'>
                                <Typewriter
                                    words={['I am Explorer I am a detective ', ' ..i am scientist.....', 'I am astronaut.......']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p className="text-xs lg:text-lg">There are many variations Type of Blog available, Now you have to choose your best choice . Level up to your Knowledge next-level </p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/allBlog'>View Blogs</Link> </button>
                            </div>
                            <a href="#slide3" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide1" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <NewsLetter></NewsLetter>
            </ div>
        </div>
    );
};

export default Home;