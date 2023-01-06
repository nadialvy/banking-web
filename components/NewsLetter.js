export default function NewsLetter(){
    return(
        <div className="bg-primaryBlue py-12 px-6">
            <div className="flex justify-between md:px-48 ml-8 md:ml-0">
                <div>
                    <p className="font-bold text-gray-700 text-sm mb-2">Subscribe to get updated news</p>
                    <img src="play text.svg"></img>
                </div>
                <div className="border border-gray-500"></div>
                <div className="ml-4 md:ml-0">
                    <h1 className="font-BaiJamjuree text-2xl font-bold mb-2">Subscribe our newsletter</h1>
                    <button className="bg-primaryOrange text-white px-4 py-2 text-xs font-semibold ">Subscribe</button>
                </div>
            </div>
        </div>
    );
}