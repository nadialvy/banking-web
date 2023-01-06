export default function Nav(){
    return(
        <ul className="flex justify-between">
            <li>
                <a className="text-gray-800 tracking-widest text-sm font-bold mx-4">ABOUT</a>
            </li>
            <li>
                <a className="text-gray-800 tracking-widest text-sm font-bold mx-4">HOW IT WORKS</a>
            </li>
            <li>
                <a className="text-gray-800 tracking-widest text-sm font-bold mx-4">CONTACT</a>
            </li>
        </ul>
    );
}