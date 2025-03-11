import React from "react";
import { Landmark, Book, HelpingHand, HeartHandshake } from "lucide-react";
import "./HomePageServices.css";

const servicesData = [
  {
    id: 1,
    icon: <Landmark />,
    title: "Temple Services",
    description: "Experience spiritual peace with our temple services.",
  },
  {
    id: 2,
    icon: <Book />,
    title: "Scripture Study",
    description:
      "Deepen your understanding with guided scripture study sessions.",
  },
  {
    id: 3,
    icon: <HelpingHand />,
    title: "Community Service",
    description: "Join us in serving the community and spreading kindness.",
  },
  {
    id: 4,
    icon: <HeartHandshake />,
    title: "Charity Programs",
    description: "Contribute to meaningful causes through our charity programs.",
  },
];

// Define colors for each card based on the id
const cardColors = ["rgba(70, 11, 47, .1490196078)", "rgba(227, 100, 20, .1490196078)", "rgba(154, 3, 30, .1490196078)", "rgba(251, 139, 36, .1490196078)"]; // Example colors

const HomePageServices = () => {
  return (
    <div className="services-container">
      <div className="services">
        <h2>Devotee Services</h2>

        <div className="services-card-main">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="services-card"
              style={{ backgroundColor: cardColors[index % cardColors.length] }} // Assigning colors dynamically
            >
              {service.icon}
              <h3 className="service-card-heading">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
              <button className="service-card-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
