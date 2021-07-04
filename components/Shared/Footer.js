
const Footer =()=>{
	return(
		   <>
	<footer className="bg-gray-800 pt-16">
        <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-end">
                <div className="sm:w-2/3">
                    <h4 className="text-3xl text-white leading-tight text-center sm:text-left">TutorIs Future is a simplyfied <br className="hidden sm:block" />easy, and <span className="font-bold underline">latest way of learning</span></h4>
                </div>
                <div className="sm:w-1/3 mt-12 sm:mt-0 flex justify-end">
                    <p className="text-white text-xl">Mobile:-9098650975</p><br />
                
                  {/*                     <button className="bg-blue-600 hover:bg-blue-500 text-white rounded py-3 px-8 shadow-lg text-xl">Contact us</button>
*/}
                </div>
            </div>
            <div className="flex justify-center sm:justify-end border-t border-gray-700 py-10 mt-16 mb-8">
                <a href="#" className="text-white mx-2">Home</a>
                <a href="#" className="text-white mx-2">About</a>
                <a href="#" className="text-white mx-2">Courses</a>
                <a href="#" className="text-white mx-2">Services</a>
                <a href="#" className="text-white mx-2">Join</a>
            </div>
        </div>
    </footer>
		   </>
		);
}

export default Footer;