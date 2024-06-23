import React, { useState } from "react";
import AdvisorCard from "./AdvisorCard";
import "./BookAdvisorPage.scss";
import Navbar from "../../components/navigation";
import SearchIcon from "@mui/icons-material/Search";

const advisors = [
  {
    id: 1,
    name: "Rohan Verma",
    title: "Finance Expert",
    experience: "Experience - 3 Years",
    stars: 5,
    minutesCompleted: 2500,
    candidatesAdvised: 12,
    rate: 25,
    image: "path-to-image.jpg", // Update the path to the advisor's image
  },
  {
    id: 2,
    name: "vikas Sharma",
    title: "Finance Expert",
    experience: "Experience - 3 Years",
    stars: 5,
    minutesCompleted: 2500,
    candidatesAdvised: 12,
    rate: 25,
    image: "path-to-image.jpg", // Update the path to the advisor's image
  },
  {
    id: 3,
    name: "Rahul Verma",
    title: "Finance Expert",
    experience: "Experience - 3 Years",
    stars: 5,
    minutesCompleted: 2500,
    candidatesAdvised: 12,
    rate: 25,
    image: "path-to-image.jpg", // Update the path to the advisor's image
  },
  {
    id: 4,
    name: "Rohan Verma",
    title: "Finance Expert",
    experience: "Experience - 3 Years",
    stars: 5,
    minutesCompleted: 2500,
    candidatesAdvised: 12,
    rate: 25,
    image: "path-to-image.jpg", // Update the path to the advisor's image
  },
  // Add more advisor objects here
];

const BookAdvisorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);


  const filteredAdvisors = advisors.filter((advisor) =>
    advisor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdvisorClick = (advisor) => {
    console.log('Clicked advisor:', advisor);
    setSelectedAdvisor(advisor);
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="book-advisor-page">
        <div className="book-advisor-page__header">
          <button className="back-button">&larr;</button>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search a name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon />
          </div>
          <button className="filter-button">Filter ▾</button>
          <div className="balance-info">
            <span>Balance - $100</span>
            <button className="add-credits-button">Add Credits</button>
          </div>
        </div>
        <div className="advisor-list">
        {filteredAdvisors.map((advisor) => (
        <div key={advisor.id} onClick={() => handleAdvisorClick(advisor)}>
          <AdvisorCard key={advisor.id} advisor={advisor} />
        </div>
      ))}
        </div>
      </div>
    </>
  );
};

export default BookAdvisorPage;
