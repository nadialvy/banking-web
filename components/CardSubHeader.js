export default function CardSubHeader(props){
    return(
        <div className="mt-8 md:mt-0 text-center">
            <img src="icon sub header.png" className="mx-auto"></img>
            <h1 className="text-primaryBlack font-bold text-xl my-4">
                {props.title}
            </h1>
            <p className="text-gray-500 mb-6">Online shopping for retail sales direct to consumers</p>
        </div>
    );
}