import Navbar from "../components/Navbar";
import Content from "../components/Content";
import section3 from "../assets/section3.png"
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp(){
    return(
        <>
            <Navbar />
            <Content  header="100% SECURE"  title="Stay protected 24/7 anywhere anytime" 
            text="We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime"
            button="Learn More" img={section3} />
            <SignUpForm />
            <Footer />
        </>

    )
}
export default SignUp;