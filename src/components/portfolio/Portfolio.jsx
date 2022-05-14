import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/PortfolioList";
import "./portfolio.scss"
import {
  featuredPortfolio,
  webPortfolio,
  codePortfolio
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
      id: "web",
      title: "Algorithms",
    },
    {
      id: "code",
      title: "LeetCode",
    },
  ];

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "code":
        setData(codePortfolio);
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
