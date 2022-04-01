import { RightOutlined } from "@ant-design/icons";
import InputLabCpn from "./InputLabCpn";

const CpnBoxLabMobile = () => {
  return (
    <>
      <div className="box-lab-mobile">
        <div className="box-title-lab-mobile">
          <p>Điểm Lab</p>
          <p>
            <RightOutlined />
          </p>
        </div>
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
      </div>
    </>
  );
};

export default CpnBoxLabMobile;
