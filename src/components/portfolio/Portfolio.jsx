import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/PortfolioList";
import "./portfolio.scss"
import {
  featuredPortfolio,
  algorithmsPortfolio,
  codePortfolio,
  resumePortfolio
} from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Tuner App",
    },
    {
      id: "code",
      title: "LeetCode",
    },
    {
      id: "algorithms",
      title: "Algorithms",
    },
    {
      id: "resume",
      title: "Resume",
    },
  ];

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "algorithms":
        setData(algorithmsPortfolio);
        break;
      case "code":
        setData(codePortfolio);
        break;
      case "resume":
        setData(resumePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
            <img src={d.img} alt=""/>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
