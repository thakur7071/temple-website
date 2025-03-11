import React from 'react';
import "./Trusty.css";

const trustyData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review: "Great service and amazing experience! Highly recommend."
  },
  {
    id: 2,
    name: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    review: "A wonderful and peaceful experience. Will visit again!"
  },
  {
    id: 3,
    name: "Robert Brown",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review: "Very well maintained and serene atmosphere."
  },
  {
    id: 4,
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    review: "Absolutely divine! The priests were very helpful."
  }
];

// Array of colors to assign based on id
const colors = ["#f1ad6f", "#f3b782", "#f5c396", "#f6ccaa"];

const Trusty = () => {
  return (
    <div className='trusty-container'>
      <div className='trusty'>
        <h2>Temple Trusty & Priest</h2>
        <div className='trusty-card-main'>
          {trustyData.map((trusty, index) => (
            <div 
              className="trusty-card" 
              key={trusty.id} 
              style={{ backgroundColor: colors[index % colors.length] }} // Assign color based on index
            >
              <img src={trusty.image} alt={trusty.name} />
              <h3 className="trusty-name">{trusty.name}</h3>
              <p className="trusty-para">"{trusty.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusty;
