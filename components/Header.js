export default function Header(){
    return(
        <>
            <h1 className="text-4xl font-bold mb-6 text-primaryBlack text-element">Banking more smart</h1>
            <p className="text-gray-500 mb-6">Meet the only spend management platform and corporate card.</p>
            <div className="flex items-center mb-8">
                <button className="bg-primaryBlack text-white font-bold pt-1 pb-2 px-3 mr-4 text-2xl">→</button>
                <p className="font-bold">Get your card</p>
            </div>
            <img src="header card.png" className="pr-4"></img>
        </>
    )
}