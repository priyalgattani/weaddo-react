import PartnerLogo from "./PartnerLogo";
import SimpleSlider from "./PartnersSlider";
import "./styles.css";
import React from "react";

function Partners() {
  return (
    <section id="partners">
      <div className="container-fluid section">
        <h2>Martech Partners</h2>
        <p>They say we are the best at what we do and how we do it.</p>
        <div className="partner-logos">
          <div className="row m-5 gx-7">
            <PartnerLogo class="upDown" link="src\assets\media\partners\google.png" name="Google" />
            <PartnerLogo class="downUp" link="src\assets\media\partners\mailchimp.png" name="Mailchimp" />
            <PartnerLogo class="upDown" link="src\assets\media\partners\adobe.png" name="Adobe" />
            <PartnerLogo class="downUp" link="src\assets\media\partners\shopify.png" name="Shopify" />
            <PartnerLogo class="upDown" link="src\assets\media\partners\netcore.png" name="Netcore" />
            <PartnerLogo class="downUp" link="src\assets\media\partners\meta.png" name="Meta" />
            <PartnerLogo class="downUp" link="src\assets\media\partners\optimizely.png" name="Optimizely" />
            <PartnerLogo class="upDown" link="src\assets\media\partners\unicommerce.png" name="Unicommerce" />
            <PartnerLogo class="downUp" link="src\assets\media\partners\amazon.png" name="Amazon" />
            <PartnerLogo class="upDown" link="src\assets\media\partners\microsoft.png" name="Microsoft" />
            <PartnerLogo class="downUp" link="src\assets\media\partners\aisensy.png" name="AiSensy" />
            <PartnerLogo class="upDown" link="src\assets\media\partners\zoho.png" name="Zoho" />
          </div>
        </div>
        <div className="partners-carousel">
          <SimpleSlider />
        </div>
      </div>
    </section>
  );
}

export default Partners;
