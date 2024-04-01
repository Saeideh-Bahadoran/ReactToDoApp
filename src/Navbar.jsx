
import IconLogo from "./src/assets/todo-icon.png"
function Navbar(){
    return(
        <nav className="navbar">
            
            <section className="AppName">TimeMaster</section>
            <div className="icon">
                 <img src= {IconLogo} className="icon-logo"/>
            </div>
            
        </nav>

    )
}
export default Navbar 