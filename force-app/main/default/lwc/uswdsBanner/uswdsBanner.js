import { LightningElement } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import uswds from "@salesforce/resourceUrl/uswds_3_x";

export default class UswdsBanner extends LightningElement {
  imgDotGov='';
  imgHttps='';
  imgUsFlagSmall=''
  connectedCallback() {
    Promise.all([loadStyle(this, uswds + "/dist/css/uswds.min.css")]).then(() => {
      console.log("styles loaded");
      this.imgDotGov=uswds + "/dist/img/icon-dot-gov.svg";
      this.imgHttps=uswds + "/dist/img/icon-https.svg";
      this.imgUsFlagSmall=uswds + '/dist/img/us_flag_small.png';
      
    });
  }

  toggleBanner(event) {
    if (this.refs.bannerContent.hasAttribute("hidden")) {
      this.refs.bannerContent.removeAttribute("hidden");
      this.refs.bannerButton.setAttribute("aria-expanded", true);
    } else {
      this.refs.bannerContent.setAttribute("hidden", "hidden");
      this.refs.bannerButton.setAttribute("aria-expanded", false);
    } 
    
    //console.log(this.template.querySelector(".usa-banner__content .usa-accordion__content"));
    // .setAttribute("hidden",false);
  }
}
