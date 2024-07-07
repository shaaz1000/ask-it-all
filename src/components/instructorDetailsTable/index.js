import React from "react";
import "./InstructorDetailsTable.scss";
import { Chip } from "@mui/material";
import UserInfo from "../userInfo";
import { makeApiCall } from "../../api/config";
import { urls } from "../../api/apiUrl";

function InstructorDetailsTable({ data }) {
  const userType = localStorage.getItem("userType");
  const getLabel = (li) => {
    if (li.bookingStatus === "Accepted") {
      return "Cancel";
    } else if (li.bookingStatus === "Pending") {
      return "Accept";
    } else {
      return "Show details";
    }
  };

  const updateBookings = async (li, label) => {
    try {
      const dataToUpdate = {
        bookingStatus: label === "Accept" ? "Accepted" : "Cancelled",
      };

      const data = await makeApiCall(
        "PUT",
        `${urls.booking}/${li._id}`,
        dataToUpdate
      );
      console.log(data);
      if (data.success) {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="instructor-details-table">
      <table>
        <tbody>
          <tr>
            <th>
              <p className="poppins-medium header">
                {userType === "Mentee"
                  ? "INSTRUCTOR NAME & DATE"
                  : "MENTEE NAME & DATE"}
              </p>
            </th>
            <th>
              <p className="poppins-medium header">CATEGORY</p>
            </th>
            <th>
              <p className="poppins-medium header">CONCEPT</p>
            </th>
            <th>
              <p className="poppins-medium header">ACTIONS</p>
            </th>
          </tr>
          {data?.map((li, index) => (
            <tr key={index}>
              <td>
                <UserInfo
                  profileImage={li.image}
                  title={
                    userType === "Mentee" ? li?.mentorId?.name : "Mentee ABC"
                  }
                  subtitle={li.bookingDateTime}
                />
              </td>
              <td>
                <Chip
                  label={li.categoryId.categoryName}
                  className="chip-color-peach"
                />
              </td>
              <td>{li.questionsAsked[0]}</td>
              <td>
                <Chip
                  label={userType === "Mentee" ? "Show Details" : getLabel(li)}
                  className="chip-color-blue"
                  onClick={() => {
                    if (
                      userType !== "Mentee" &&
                      (li.bookingStatus === "Accepted" ||
                        li.bookingStatus === "Pending")
                    ) {
                      updateBookings(li, getLabel(li));
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InstructorDetailsTable;
