import React from "react";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="footer-row">
          <div class="footer-column">
            <h4>About Us</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              metus euismod, faucibus metus ut, semper nibh. Aenean euismod
              justo eu enim dapibus suscipit.
            </p>
          </div>

          <div class="footer-column">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-angle-right"></i> Subscription
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-angle-right"></i> Contact us
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-angle-right"></i> Bug report
                </a>
              </li>
            </ul>
          </div>

          <div class="column">
            <h4>Connect with Us</h4>

            <ul class="social-icons">
              <li>
                <a href="#" className="insta">
                  <AiOutlineInstagram />
                </a>
              </li>

              <li>
                <a href="#" className="facebook">
                  <AiOutlineFacebook />
                </a>
              </li>

              <li>
                <a href="#" className="twitter">
                  <AiOutlineTwitter />
                </a>
              </li>

              <li>
                <a href="#" className="whatsapp">
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p class="copyright">© 2023 All Rights Reserved</p>
      </footer>
    </div>
  );
}
