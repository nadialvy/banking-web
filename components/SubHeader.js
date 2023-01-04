import CardIconSubHeader from "./CardIconSubHeader";
import CardSubHeader from "./CardSubHeader";

export default function SubHeader(){
    return(
        <div className="flex flex-wrap">
            <CardIconSubHeader />
            <CardSubHeader />
            <CardSubHeader />
            <CardSubHeader />
        </div>
    );
}
