import { Component } from "react";
import { Menue } from "./Menue";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1>My Portfolio <i className="fa-brands fa-github"></i></h1>
                <ul>
                    {Menue.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>{item.title}</a></li>
                        )
                    })}

                </ul>
            </nav>
        )
    }
}

export default Navbar;