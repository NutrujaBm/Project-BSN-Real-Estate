import "./Navbar.scss";
import btn_regis from '/icons-home.png';
import logo from '/logo.png';
import user from '/icons-user.png';
import hamburger from '/icons-menu.png';
import line from '/icons-line.png';
import { useState } from "react";


function Navbar() {
    const [open,setOpen] = useState(false)
    return (
// <-- NAV Start -->
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src={logo} alt="" />
                    <div className="logo-text">
                        <span>BSN</span>
                        <span className="sub-text">Real Estate</span>
                    </div>
                </a>
            </div>

            <div className="center">
                <a href="/">หน้าหลัก</a>
                <a href="/">รายการเช่าอสังหาริมทรัพย์</a>
                <a href="/">ติดต่อเรา</a>
            </div>

            <div className="right">
                <img src={user} alt="" />
                <a href="/">สมัครสมาชิก  </a>
                <img src={line} alt="" /> 
                <a href="/">เข้าสู่ระบบ</a>
                <a href="/">
                    <button id="login-btn" className="nav-button">
                        <img src={btn_regis} alt="" />ประกาศขาย
                    </button>
                </a>  
                <div className="menuIcon">
                    <img src={hamburger} alt="" 
                    onClick={()=>setOpen((prev)=> !prev)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">หน้าหลัก</a>
                    <a href="/">รายการเช่าอสังหาริมทรัพย์</a>
                    <a href="/">ติดต่อเรา</a>
                </div>
            </div>
        </nav>
    )
}
// <-- NAV End -->

export default Navbar;