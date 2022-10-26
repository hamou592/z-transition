import "../components/SubmitStyles.css"

function SignUpForm(){
    return(
       <div className="submit">
            <h1 className="submitHeader">SignUp</h1>
            <ul className="submitForm">
                <input type="text" placeholder="Your First Name" required />
                <input type="text" placeholder="Your Last Name" required/>
                <input type="email" placeholder="Your Email" required />
                <input type="password" placeholder="Your Password" required />
                <textarea rows="5" placeholder="Your Message" />
                <button className="submitButton" type="submit">Sign Up</button>
            </ul>
       </div>
    )
}

export default SignUpForm;