import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import InputLabCpn from "./InputLabCpn";

const CpnBoxLabMobile = () => {
  const [showInputLab, setShowInputLab] = useState(false);
  const handleShowInputLab = (e) => {
    setShowInputLab(showInputLab ? false : true);
  };
  return (
    <>
      <div className="box-lab-mobile">
        <div
          className={
            showInputLab
              ? "box-title-lab-mobile-active"
              : "box-title-lab-mobile"
          }
          onClick={(e) => handleShowInputLab(e)}
        >
          <p>Điểm Lab</p>
          <p>
            <RightOutlined />
          </p>
        </div>
        {showInputLab ? (
          <>
            <div className="input-lab-mobile">
              <InputLabCpn />
              <InputLabCpn />
              <InputLabCpn />
              <InputLabCpn />
              <InputLabCpn />
              <InputLabCpn />
              <InputLabCpn />
            </div>
            <div className="footer-lab-mobile">
              <button className="btn btn-save">Lưu</button>
              <button
                className="btn btn-cancel"
                type="reset"
                // onClick={resetForm}
              >
                Hủy
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CpnBoxLabMobile;
