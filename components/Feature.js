export default function Feature(){
    return(
        <div className="px-6 pb-20">
            <div className="flex flex-wrap mt-20 ">
                <div className="md:w-1/2">
                    <img src="feature.png" className="w-full"></img>
                </div>
                <div className="md:w-1/2 md:-mx-10">
                    <h1 className="font-BaiJamjuree font-semibold text-2xl md:text-4xl ">Handoff your work smarter now</h1>
                    <p className="text-gray-500 my-4 pr-22 mb-10">Create documentation for the collaborators (i.e. designers or devs) directly in your design file.</p>
                    <div className="flex mb-6">
                        <img src="file.png" className="drop-shadow-lg w-10 h-10 mr-6"></img>
                        <div>
                            <h2 className="font-BaiJamjuree font-semibold text-lg">Strategic</h2>
                            <p className="text-gray-500 text-sm">Suggests that the component spacingbetween cards and elements.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src="calendar.png" className="drop-shadow-lg w-10 h-10 mr-6"></img>
                        <div>
                            <h2 className="font-BaiJamjuree font-semibold text-lg">Work Schedule</h2>
                            <p className="text-gray-500 text-sm">work schedule is the time an employee is expected to be on the job.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}