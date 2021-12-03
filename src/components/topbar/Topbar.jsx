import "./topbar.scss"
import { EmailRounded, Person, LinkedIn, GitHub } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">webfolio</a>
          <div className="item">
            <Person className="icon"/>
            <span>760-317-3158</span>
          </div>
          <div className="item">
            <EmailRounded className="icon"/>
            <span>zach.jilani1@email.com</span>
          </div>
          <div className="item">
            <LinkedIn className="icon"/>
            <span>in/zachjilani</span>
          </div>
          <div className="item">
            <GitHub className="icon"/>
            <span>github.com/zachjilani</span>
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
