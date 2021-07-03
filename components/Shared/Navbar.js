
const Navbar=()=>{
	return(
		<>
	     <header className="h-24 sm:h-32 flex items-center">
        <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
            <div className="font-black text-blue-900 text-2xl flex items-start">
                Company<span className="w-3 h-3 rounded-full bg-purple-600 ml-2"></span>
            </div>
            <div className="flex items-center">
                <nav className="text-purple-900 text-lg hidden lg:flex items-center">
                    <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                        Home
                    </a>
                    <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                        Service
                    </a>
                    <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                        Portfolio
                    </a>
                    <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                        Contact us
                    </a>
                </nav>
                <button className="flex flex-col ml-4">
                    <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                    <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                    <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                </button>
            </div>
        </div>
    </header>
		</>
		);
}

export default Navbar;