import Navbar from '../components/Navbar'


export default function Header(){
    return(
        <>
            <Navbar />
            <div className="flex flex-wrap items-center justify-start">
                <div className="md:w-1/2">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-BaiJamjuree text-primaryBlack text-element">Banking more
                    smart</h1>
                    <p className="text-gray-500 my-6 md:mr-80">Meet the only spend management platform and corporate card.</p>
                    <div className="flex items-center mb-8">
                        <button className="bg-primaryBlack text-white font-bold pt-1 pb-2 px-3 mr-4 text-2xl">→</button>
                        <p className="font-bold text-primaryBlack">Get your card</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src="header card.png" className="pr-4 w-full"></img>
                </div>
            </div>
        </>
    )
}