import "./NavbarStyles.css";
import { Component } from "react";
import {Routes,Route,Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {MenuItems} from "./MenuItems";
import menu from "../assets/menu.png";
//this is importing icons from these library
import { MdFingerprint} from "react-icons/md"
import { FaBars,FaTimes } from "react-icons/fa"
import close from "../assets/close.png"
let last = MenuItems.length;
let temp = 2;
let tempimg = close;
const changesubmit = () => {
    if(temp === 1){
        temp=2;
    }else{
        temp=1;
    }
}
class Navbar extends Component{
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <div className="logo">
                    <MdFingerprint />
                    <h1>Z-TRANSIT</h1>
                </div>
                <div className="menu-icons">                    
                    <span onClick={this.handleClick}  class={this.state.clicked ? "material-icons-sharp close" : "material-icons-sharp menu "} >{this.state.clicked ?"close" : "menu" }</span>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((item,index) =>{
                            return(
                                <li>
                                   <Link className={MenuItems[index].cName} to={MenuItems[index].url}>
                                        {MenuItems[index].title}
                                   </Link> 
                                </li>
                            )
                        })
                    }
                    <Link onClick={changesubmit} className={MenuItems[last-temp].cName} to={MenuItems[last-temp].url}>
                        <button>{MenuItems[last-temp].title}</button>                        
                    </Link>
                </ul>
            </nav>
        )
    }
}
export default Navbar;