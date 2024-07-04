import React from "react";
import "./footer.scss";
import {
  BUTTON_APPSTORE,
  BUTTON_GOOGLEPLAY,
  ICON_MANGCODING,
} from "../../static/assets/svg/Icons";
import {
  Apple,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <img src={ICON_MANGCODING} />
        <p>Download the app by clicking the link below:</p>
        <span className="footer-btn-group">
          <img src={BUTTON_GOOGLEPLAY} />
          <img src={BUTTON_APPSTORE} />
        </span>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Pages</th>
            <th>Service</th>
            <th className="contact-column">Contact</th>
            <th>Social media</th>
          </tr>
          <tr>
            <td>Terms & Conditions</td>
            <td>Shopify</td>
            <td className="inline-content">
              <Phone /> (406) 555-0120
            </td>
            <td>
              <div className="social-media">
                <Facebook /> <Twitter /> <LinkedIn /> <Instagram />
              </div>
            </td>
          </tr>
          <tr>
            <td>FAQ</td>
            <td>Wordpress</td>
            <td className="inline-content">
              <Email /> mangcoding123@gmail.com
            </td>
          </tr>
          <tr>
            <td>Blog</td>
            <td>UI/UX Design</td>
            <td className="inline-content">
              <LocationOn /> 2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </td>
          </tr>
          <tr>
            <td>Demo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Footer;
