import "../components/SubmitStyles.css"

function LogInForm(){
    return(
       <div className="submit">
            <h1 className="submitHeader">Log In</h1>
            <ul className="submitForm">
                <input type="email" placeholder="Your Email" required />
                <input type="password" placeholder="Your Password" required />
                <button className="submitButton" type="submit">Log In</button>
            </ul>
       </div>
    )
}

export default LogInForm;