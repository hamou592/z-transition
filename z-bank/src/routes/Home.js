import Navbar from "../components/Navbar";
import Content from "../components/Content";
import section1 from "../assets/person-card.png"
import section2 from "../assets/transaction.png"
import section3 from "../assets/section3.png";
import section4 from "../assets/section4.png";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
function Home(){
    return(
        <>
            <Navbar />
            <Content header="EXCLUSIVE ACCESS"  title="Unlimited Transactions with zero fees" 
            text="Get access to our exclusive diamond card thzt allows you to send unlimited without getting charged any fees"
            button="Get Started" img={section2} />
            <Content  header="EASY SETUP"  title="Super fast and simple onboarding process" 
            text="Get everything set up and really in under 10 minutes.All you need to do is add your information and you're
            ready to go."
            button="Start Now" img={section1} />
            <Content  header="100% SECURE"  title="Stay protected 24/7 anywhere anytime" 
            text="We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime"
            button="Learn More" img={section3} />
            <Pricing />
            <Content  header="DATA ANALYTICS"  title="Every transation is stored on our secure cloud database" 
            text="never ever have to worry again about saved reciepts.We store your data,so you can access it anytime."
            button="Sign Up Now" img={section4} />
            <Footer />
        </>

    )
}
export default Home;