import CardIconSubHeader from "./CardIconSubHeader";
import CardSubHeader from "./CardSubHeader";

export default function SubHeader(){
    return(
        <div className="flex flex-wrap items-center justify-center">
            <div className="md:w-1/2">
                <CardIconSubHeader />
            </div>
            <div className="md:w-1/2">
                <CardSubHeader title='1.5% Cashback'/>
            </div>
            <div className="md:w-1/2">
                <CardSubHeader title='30-days terms'/>
            </div>
            <div className="md:w-1/2">
                <CardSubHeader title='Save Moneys'/>
            </div>
        </div>
    );
}
