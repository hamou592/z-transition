import Navbar from "../components/Navbar";
import Content from "../components/Content";
import section1 from "../assets/person-card.png"
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";

function LogIn(){
    return(
        <>
           <Navbar />
           <Content  header="EASY SETUP"  title="Super fast and simple onboarding process" 
            text="Get everything set up and really in under 10 minutes.All you need to do is add your information and you're
            ready to go."
            button="Start Now" img={section1} />
            <LogInForm />
            <Footer />
        </>
        
        
    )
}
export default LogIn;