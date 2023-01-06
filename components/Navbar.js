import Nav from './Nav'

export default function Navbar(){
    return(
        <div className="bg-customWhite flex items-center justify-between pt-12 px-40">
            <div>
                <Nav />
            </div>
            <div >
                <img src='logo.svg' className=''></img>
            </div>
            <div>
                <img src='cart.svg' className='right-0'></img>
            </div>
        </div>
    );
}