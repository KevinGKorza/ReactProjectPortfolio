import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1>My Portfolio <i className="fa-brands fa-github"></i></h1>
                <ul>
                 <li>
                <a href = "https://twitter.com/KevinGKorza">
                 <i className="fa-regular fa-user"></i>About Me</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;