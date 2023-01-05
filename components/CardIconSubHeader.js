export default function CardIconSubHeader(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <h1 className="text-primaryBlack text-2xl font-bold mr-2">Hot</h1>
                <img src="fire (1).png" className="w-6"></img>
            </div>
            <div className="flex justify-center">
                <h1 className="text-primaryBlack text-2xl font-bold my-4">deals for you</h1>
            </div>
            <p className="text-gray-500 mb-6 text-center">Online shopping for retail sales direct to consumers</p>
        </div>
    );
}
