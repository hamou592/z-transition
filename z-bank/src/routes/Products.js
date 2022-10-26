import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Content from "../components/Content"
import section4 from "../assets/section4.png"
function Products(){
    return(
        <>
            <Navbar />
            <Content  header="DATA ANALYTICS"  title="Every transation is stored on our secure cloud database" 
            text="never ever have to worry again about saved reciepts.We store your data,so you can access it anytime."
            button="Sign Up Now" img={section4} />
            <Footer />  
        </>
      
    )
}
export default Products;