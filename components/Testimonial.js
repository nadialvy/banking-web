export default function Testimonial(){
    return(
        <>
            <div className="pt-20 pb-10">
                <h1 className="text-center font-bold text-4xl md:text-7xl font-BaiJamjuree">1000+ Customer</h1>
                <p className="text-center text-gray-500 mt-8 md:px-96">Analyze any Business or Creator account—including your competitors—to find the imagery, visuals, and captions that drive audience engagement. Get social calendars planned faster and spend less time testing content strategies.</p>
            </div>
            <div className="tableCustom md:grid-cols-4 sm:grid-cols-2 mb-12 border-t md:border-b mx-4 md:mx-32">
                <div className="px-4 py-10 border-r border-b md:border-b-0">
                    <p className="text-center text-gray-500 tracking-widest mb-2">PRODUCT</p>
                    <h2 className="text-center font-bold text-lg">10,000+</h2>
                </div>
                <div className="px-4 py-10 border-b md:border-none-0 md:border-r md:border-b-0">
                    <p className="text-center text-gray-500 tracking-wider mb-2">LIKES</p>
                    <h2 className="text-center font-bold text-lg">45,600</h2>
                </div>
                <div className="px-4 py-10 border-r mt-2 md:mt-0 border-b border-t md:border-b-0 md:border-t-0">
                    <p className="text-center text-gray-500 tracking-widest mb-2">SALE</p>
                    <h2 className="text-center font-bold text-lg">576864</h2>
                </div>
                <div className="px-4 py-10 border-b border-t mt-2 md:mt-0 md:border-b-0 md:border-t-0">
                    <p className="text-center text-gray-500 tracking-wider mb-2">CUSTOMERS</p>
                    <h2 className="text-center font-bold text-lg">98329+</h2>
                </div>
            </div>
    </>
    );
}