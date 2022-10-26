import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Content from "../components/Content";
import section2 from "../assets/transaction.png"
function Services(){
    return(
        <>
            <Navbar />
            <Navbar />
            <Pricing />
            <Content header="EXCLUSIVE ACCESS"  title="Unlimited Transactions with zero fees" 
            text="Get access to our exclusive diamond card thzt allows you to send unlimited without getting charged any fees"
            button="Get Started" img={section2} />
            <Footer />
        </>


    )
}
export default Services;