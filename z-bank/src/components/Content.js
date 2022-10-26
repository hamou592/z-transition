import "./ContentStyles.css"
import section1 from "../assets/person-card.png"
import section2 from "../assets/transaction.png"
function Content(props){
    return(
        <div className="content">
            <div className="text-content">
                <h3>{props.header}</h3>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button>{props.button}</button>
            </div>
            <div>
                <img src={props.img} />
            </div>
        </div>

    )
}

export default Content;