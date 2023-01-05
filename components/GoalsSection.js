export default function GoalsSection(){
    return(
        <>
            <div className="flex justify-center items-center">
                <img src="ellipseGoalsSection.png" className="w-12 absolute"></img>
            </div>
            <div className="bg-lightBlue px-6 py-16 flex flex-wrap">
                <div className="md:w-6/12 flex justify-center flex-wrap">
                    <h1 className="text-xl mb-4 font-BaiJamjuree font-semibold">We Building Social uniqueness</h1>
                    <p className="text-gray-500 mb-16 md:mb-0 text-center">The marketing strategy lays out target markets and the value.</p>
                </div>
                <div className="md:w-6/12 flex justify-center flex-wrap">
                    <h1 className="text-xl mb-4 font-BaiJamjuree font-semibold">Social Media beyond probability</h1>
                    <p className="text-gray-500 md:mb-0 text-center">Essentially a formula for how a business is going to compete.</p>
                </div>
            </div>
        </>
    );
}