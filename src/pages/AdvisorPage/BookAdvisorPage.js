import React, { useState } from "react";
import AdvisorCard from "./AdvisorCard";
import "./BookAdvisorPage.scss";

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
  // Add more advisor objects here
];

const BookAdvisorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdvisors = advisors.filter((advisor) =>
    advisor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
          <button className="search-button">🔍</button>
        </div>
        <button className="filter-button">Filter ▾</button>
        <div className="balance-info">
          <span>Balance - $100</span>
          <button className="add-credits-button">Add Credits</button>
        </div>
      </div>
      <div className="advisor-list">
        {filteredAdvisors.map((advisor) => (
          <AdvisorCard key={advisor.id} advisor={advisor} />
        ))}
      </div>
    </div>
  );
};

export default BookAdvisorPage;
