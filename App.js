import React from "react";
import ReactDOM from "react-dom/client";

// JSX
/*
Header
-logo
-nav items
Body
-Search
- Restaurant container
  - Restaurant Card
    -image
    -Rest name
    -star rating
    -cuisines
    -delivery time
Footer
-copyright
-links
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://seeklogo.com/images/F/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    Restaurant_Name: "KFC",
    id: 1,
    URL: "https://www.sample-restaurant1.com",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_50471.JPG",
    Timing: "10:00 AM - 10:00 PM",
    Address: "123 Main Street, Sample City",
    Location: "Sample Location",
    City: "Sample City",
    Offer: "10% off on orders over $50",
    Contact_Number: "+1 123-456-7890",
    Cost_for_two: 400,
    Restaurant_Type: "Burger, Cold drinks, Fast food",
    Ratings_for_Swiggy: 4.5,
    Delivery_Time: 40,
  },
  {
    Restaurant_Name: "Meghna Foods",
    id: 2,
    URL: "https://www.sample-restaurant2.com",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    Timing: "11:00 AM - 9:00 PM",
    Address: "456 Elm Street, Another City",
    Location: "Another Location",
    City: "Another City",
    Offer: "Free dessert with every meal",
    Contact_Number: "+1 987-654-3210",
    Cost_for_two: 350,
    Restaurant_Type: "North Indian, South Indian, Chinese",
    Ratings_for_Swiggy: 4.0,
    Delivery_Time: 36,
  },
  {
    Restaurant_Name: "Bangla Sweet House",
    id: 3,
    URL: "https://www.sample-restaurant2.com",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b1jjk4srnoa7egoucsyq",
    Timing: "11:00 AM - 9:00 PM",
    Address: "456 Elm Street, Another City",
    Location: "Another Location",
    City: "Another City",
    Offer: "Free dessert with every meal",
    Contact_Number: "+1 987-654-3210",
    Cost_for_two: 300,
    Restaurant_Type: "North Indian, Sweets, Fast Food",
    Ratings_for_Swiggy: 4.1,
    Delivery_Time: 30,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search...</div>
      <div className="rest-container">
        {resList.map((item) => (
          <RestCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

const RestCard = (props) => {
  const {
    image,
    Restaurant_Name,
    Ratings_for_Swiggy,
    Restaurant_Type,
    Cost_for_two,
    Delivery_Time,
    Offer,
    Timing,
  } = props?.resData;
  console.log(props);
  return (
    <div className="rest-card">
      <img alt="food logo" src={image} />
      <h3 className="title">{Restaurant_Name}</h3>
      <h3 className="detail_type1">Cuisines - {Restaurant_Type}</h3>
      <h4 className="detail_type2">Rating - {Ratings_for_Swiggy}</h4>
      <h4 className="detail_type2">Cost for two persons - ₹ {Cost_for_two}</h4>
      <h5 className="detail_type3">Delivery time - {Delivery_Time} mins</h5>
      <h5 className="detail_type3">Offer - {Offer}</h5>
      <h5 className="detail_type4">Timing - {Timing}</h5>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
