import { Outlet, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <>
            <div id="container-div-header">
                <header id="header-div">
                    <div id="logo-div">
                        <img src="./logo.png" alt="Logo" id="header-logo"></img>
                        <h1 id="logo-text">CropCast</h1>
                    </div>
                    <nav>
                        <ul id="navigation-buttons">
                            <li><NavLink to="/" end className='h-nav-btns' activeclasscname='active'>Home</NavLink></li>
                            <li><NavLink to="/predict" end className='h-nav-btns' activeclassname='active'>Predict</NavLink></li>
                            <li><NavLink to="/trends" end className='h-nav-btns' activeclassname='active'>Trends</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <hr className="hr-style"></hr> */}
            </div>
            <Outlet /> 
        </>
    )
}

export default Header;