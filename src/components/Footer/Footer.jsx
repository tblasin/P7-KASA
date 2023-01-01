import React from "react";
import '../Footer/footer.css';
import FooterLogos from "../FooterLogos/FooterLogos";
import { ReactComponent as FooterCopyRights } from '../../assets/footerLogos/footerCopyRights.svg'


const Footer = () => {
   return (
      <div className="footer">
        <FooterLogos />
        <FooterCopyRights id="FooterCopyRights"/>
      </div>
   );
};

export default Footer;