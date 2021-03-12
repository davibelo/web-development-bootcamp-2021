import React from "react";

const today = new Date();
const hour = today.getHours();

const imgSrc = "https://picsum.photos/100";

// You can use inline styling for dynamic styling
const customStyleGreeting = {
  color: "red",
};

let greeting = "";
if (hour < 12) {
  greeting = "Good Morning!";
  customStyleGreeting.color = "red";
} else if (hour < 18) {
  greeting = "Good Afternoon!";
  customStyleGreeting.color = "green";
} else {
  greeting = "Good Evening!";
  customStyleGreeting.color = "blue";
}

// React Component
function Styling() {
  return (
    <div>
      <h1 style={customStyleGreeting}>{greeting}</h1>
      <h1 className="heading">My Favourite Foods</h1>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
      <img
        className="food-img"
        alt="bacon"
        src="https://thebakermama.com/wp-content/uploads/2018/08/fullsizeoutput_15a7c.jpg"
      />
      <img
        className="food-img"
        alt="jamon"
        src="https://s.cornershopapp.com/product-images/2175214.png?versionId=v3clj.E_M_309IqBq6oajTqsT21OuT8V"
      />
      <img
        className="food-img"
        alt="noodles"
        src="https://static.toiimg.com/photo/52467119.cms"
      />
      <img className="food-img" alt="random" src={imgSrc + "?grayscale"} />
    </div>
  );
}

export default Styling;
