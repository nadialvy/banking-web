import classnames from "classnames";

export default function Nav(props){
    const dirs = {
        horizontal: "flex justify-between space-x-5",
        vertical: "flex flex-col space-y-5"
    }

    const pickedDir = dirs[props.dir];

    return(
        <ul className={classnames("flex", pickedDir)}>
            <li>
                <a className="text-gray-800 tracking-widest text-sm font-bold">ABOUT</a>
            </li>
            <li>
                <a className="text-gray-800 tracking-widest text-sm font-bold">HOW IT WORKS</a>
            </li>
            <li>
                <a className="text-gray-800 tracking-widest text-sm font-bold">CONTACT</a>
            </li>
        </ul>
    );
}