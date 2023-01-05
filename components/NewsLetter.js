export default function NewsLetter(){
    return(
        <div className="bg-primaryBlue py-12 px-6">
            <div className="flex">
                <div className="w-1/2">
                    <p className="font-bold text-gray-700 text-sm mb-2">Subscribe to get updated news</p>
                    <img src="play text.svg"></img>
                </div>
                <span className="border border-gray-500 mx-8"></span>
                <div className="w-1/2">
                    <h1 className="font-BaiJamjuree text-2xl font-bold mb-2">Subscribe our newsletter</h1>
                    <button className="bg-primaryOrange text-white px-4 py-2 text-xs font-semibold ">Subscribe</button>
                </div>
            </div>
        </div>
    );
}