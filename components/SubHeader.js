import CardIconSubHeader from "./CardIconSubHeader";
import CardSubHeader from "./CardSubHeader";

export default function SubHeader(){
    return(
        <div className="flex flex-wrap">
            <CardIconSubHeader />
            <CardSubHeader title='1.5% Cashback'/>
            <CardSubHeader title='30-days terms'/>
            <CardSubHeader title='Save Moneys'/>
        </div>
    );
}
