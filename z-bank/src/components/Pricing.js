import "./PricingStyles.css"
import medal from "../assets/medal.png"
import medalThree from "../assets/medal-three.png"
import medalSecond from "../assets/medal-second.png"
function Pricing(){
    return(
        <div className="price-section">
        <h2 className="header">Pricing</h2>
            <div className="Pricing">
                <div className="Price">
                    <img src={medalThree} />
                    <h3>Starter</h3>
                    <h2>$8.99</h2>
                    <h6>per month</h6>
                    <h5>100  Transactions</h5>
                    <h5>2% Cash Back</h5>
                    <h5>$10,000 Limit</h5>
                    <button>Choose Plan</button>
                </div>
                <div className="Price">
                    <img src={medal} />
                    <h3>Diamond</h3>
                    <h2>$99.99</h2>
                    <h6>per month</h6>
                    <h5>Unlimited Transactions</h5>
                    <h5>5% Cash Back</h5>
                    <h5>Unlimited Spending</h5>
                    <button className="middle">Choose Plan</button>
                </div>
                <div className="Price">
                    <img src={medalSecond} />
                    <h3>Gold</h3>
                    <h2>$29.99</h2>
                    <h6>per month</h6>
                    <h5>1000  Transactions</h5>
                    <h5>3.5% Cash Back</h5>
                    <h5>$100,000 Limit</h5>
                    <button>Choose Plan</button>
                </div>
            </div>
        </div>

    )
}
export default Pricing;