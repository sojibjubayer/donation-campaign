


const Banner = () => {
    return (
        <div className=" ">
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/2qNDmwJ/helping-hand.png)' }}>
        
               
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <input className="p-2 rounded text-black " type="text" placeholder="Search here...." />
                        <button className="p-2 rounded-r -ml-2 bg-[#FF444A] text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;