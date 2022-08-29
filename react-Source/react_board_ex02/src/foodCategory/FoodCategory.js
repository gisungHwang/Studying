import "./FoodCategory.css";
import porkfoot from "./buttonicon/porkfoot.svg";
import cafe from "./buttonicon/cafe.svg";
import pizza from "./buttonicon/pizza.svg";
import china from "./buttonicon/china.svg";
import kfood from "./buttonicon/kfood.svg";
import japan from "./buttonicon/japan.svg";
import chicken from "./buttonicon/chicken.svg";
import dessert from "./buttonicon/dessert.svg";
import burger from "./buttonicon/burger.svg";
import sandwich from "./buttonicon/sandwich.svg";
import { Link } from "react-router-dom";

function FoodCategory() {
  return (
    <div className="FoodCategory">
      <p>배달 BEE</p>
      <Link to="/main/cafe">
        <img className="imcafe" src={cafe} alt="notImage"></img>
      </Link>
      <Link to="/main/porkfood">
        <img className="imporkfoot" src={porkfoot} alt="notImage"></img>
      </Link>
      <Link to="/main/pizza">
        <img className="impizza" src={pizza} alt="notImage"></img>
      </Link>
      <Link to="/main/chinese">
        <img className="imchina" src={china} alt="notImage"></img>
      </Link>
      <Link to="/main/japanese">
        <img className="imjapan" src={japan} alt="notImage"></img>
      </Link>
      <Link to="/main/korean">
        <img className="imkfood" src={kfood} alt="notImage"></img>
      </Link>
      <Link to="/main/chicken">
        <img className="imchicken" src={chicken} alt="notImage"></img>
      </Link>
      <Link to="/main/dessert">
        <img className="imdessert" src={dessert} alt="notImage"></img>
      </Link>
      <Link to="/main/burger">
        <img className="imburger" src={burger} alt="notImage"></img>
      </Link>
      <Link to="/main/sandwitch">
        <img className="imsandwich" src={sandwich} alt="notImage"></img>
      </Link>
    </div>
  );
}

export default FoodCategory;
