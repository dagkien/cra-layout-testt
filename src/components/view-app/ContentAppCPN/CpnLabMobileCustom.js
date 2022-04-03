import { useEffect } from "react";
import CpnBoxLabMobile from "./CpnBoxLabMobile";

const CpnLabMobileCustom = (props) => {
  useEffect(() => {
    let labCpnElm = document.querySelector(".cpn-lab-mobile");
    if (props.showAsideColumn) {
      labCpnElm.style.display = "flex";
    } else {
      labCpnElm.style.display = "none";
    }
  }, [props.showAsideColumn]);
  return (
    <>
      <div className="cpn-lab-mobile">
        <div className="wrapper-lab-mobile">
          <CpnBoxLabMobile />
          <CpnBoxLabMobile />
        </div>
      </div>
    </>
  );
};

export default CpnLabMobileCustom;
