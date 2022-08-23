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
      <Link to="/main/menucafe">
        <img className="imcafe" src={cafe} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menuporkfood">
        <img className="imporkfoot" src={porkfoot} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menupizza">
        <img className="impizza" src={pizza} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menuchina">
        <img className="imchina" src={china} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menujapan">
        <img className="imjapan" src={japan} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menukfood">
        <img className="imkfood" src={kfood} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menuchicken">
        <img className="imchicken" src={chicken} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menudessert">
        <img className="imdessert" src={dessert} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menuburger">
        <img className="imburger" src={burger} alt="porkfoot"></img>
      </Link>
      <Link to="/main/menusandwich">
        <img className="imsandwich" src={sandwich} alt="porkfoot"></img>
      </Link>
    </div>
  );
}

export default FoodCategory;
