import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1>My Portfolio <i className="fa-brands fa-github"></i></h1>
            </nav>
        )
    }
}

export default Navbar;