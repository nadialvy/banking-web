export default function GoalsSection(){
    return(
        <>
            <div className="flex justify-center items-center">
                <img src="ellipseGoalsSection.png" className="w-12 absolute"></img>
            </div>
            <div className="bg-lightBlue px-6 py-16 md:py-32 md:px-52 flex flex-wrap">
                <div className="md:w-6/12 md:pl-24">
                    <h1 className="text-xl pr-10 mb-4 md:mb-0 font-BaiJamjuree">We Building Social uniqueness</h1>
                    <p className="text-gray-500 mb-16 md:mb-0 md:pr-52">The marketing strategy lays out target markets and the value.</p>
                </div>
                <div className="md:w-6/12 md:pl-24">
                    <h1 className="text-xl pr-10 mb-4 md:mb-0 font-BaiJamjuree">Social Media beyond probability</h1>
                    <p className="text-gray-500 md:mb-0 md:pr-52">Essentially a formula for how a business is going to compete.</p>
                </div>
            </div>
        </>
    );
}