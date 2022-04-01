import { useEffect, useState } from "react";
import InputLabCpn from "./InputLabCpn";

const CpnLabCustom = (props) => {
  useEffect(() => {
    let labCpnElm = document.querySelector(".column-labCpn");
    if (props.showAsideColumn) {
      labCpnElm.style.display = "flex";
    } else {
      labCpnElm.style.display = "none";
    }
  }, [props.showAsideColumn]);

  const [checkReset, setReset] = useState(false);
  const resetForm = () => {
    // disabled input diem lab
    let inputScoreLab = document.querySelector(".input-score-lab");
    setReset(checkReset ? false : true);
    inputScoreLab.setAttribute("disabled", "true");
  };
  return (
    <>
      <form className="column-labCpn">
        <div className="header-lab">
          <p className="name-lab">NGUYEN HOANG THUY MAI</p>
          <p className="sbv">Số buổi vắng: 10</p>
        </div>
        <div className="body-lab">
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
          <InputLabCpn checkReset={checkReset} />
        </div>
        <div className="footer-lab">
          <button className="btn btn-save">Lưu</button>
          <button className="btn btn-cancel" type="reset" onClick={resetForm}>
            Hủy
          </button>
        </div>
      </form>
    </>
  );
};

export default CpnLabCustom;
