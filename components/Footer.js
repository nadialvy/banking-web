export default function Footer(){
    return(
        <div className="container mx-auto px-6 py-8">
            <div className="flex">
                <div className="w-1/3 text-xs font-semibold flex flex-wrap justify-start">
                    <p className="text-gray-500 tracking-wider my-2 md:mx-2">ABOUT</p>
                    <p className="text-gray-500 tracking-wider my-2 md:mx-2">HOW IT WORKS</p>
                    <p className="text-gray-500 tracking-wider my-2 md:mx-2">CONTACT</p>
                </div>
                <div className="w-1/3 flex justify-center mx-4 md:mx-0">
                    <img src="logo.svg" className="md:w-1/4"></img>
                </div>
                <div className="w-1/3 text-xs font-semibold flex flex-wrap justify-end">
                    <p className="text-gray-500 tracking-wider my-2 md:mx-2">SIGN UP</p>
                    <p className="text-gray-500 tracking-wider my-2 md:mx-2">LOG IN</p>
                    <img src="Social icon.svg"></img>
                </div>
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap justify-center mt-8 mb-2">
                <p className="text-gray-500 text-xs opacity-80">Copyright © 2023.Besnik creative</p>
                <hr class="border-gray-300 w-full mx-4 my-2 md:my-0"></hr>
                <p className="text-gray-500 text-xs opacity-80">Designed by Besnik</p>
            </div>
        </div>
    );
}