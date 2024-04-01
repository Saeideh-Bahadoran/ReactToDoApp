
import IconLogo from "./assets/todo-icon.png"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="navItems">
                
                <div className="icon">
                <img src= {IconLogo} className="icon-logo" />
                </div> 
                <div className="appName">TimeMaster</div>
           
            </div>
            
            
        </nav>

    )
}
export default Navbar 