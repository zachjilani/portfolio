import "./topbar.scss"
import {CoffeeRounded, EmailRounded, Person} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">somename</a>
          <div className="item">
            <Person className="icon"/>
            <span>1234567890</span>
          </div>
          <div className="item">
            <EmailRounded className="icon"/>
            <span>email@email.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  )
}
