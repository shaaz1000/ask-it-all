import React from "react";
import "./InstructorDetailsTable.scss";
import { Chip } from "@mui/material";
import UserInfo from "../userInfo";

function InstructorDetailsTable({ data }) {
  return (
    <div className="instructor-details-table">
      <table>
        <tbody>
          <tr>
            <th>
              <p className="poppins-medium header">INSTRUCTOR NAME & DATE</p>
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
                  title={li?.mentorId?.name ?? "Person"}
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
                  label="SHOW DETAILS"
                  className="chip-color-blue"
                  // onClick={li.actions}
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
