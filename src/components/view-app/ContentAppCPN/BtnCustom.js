import { RightOutlined } from "@ant-design/icons";

const BtnCustom = (props) => {
  const handleShowLab = () => {
    props.setShowAsideColumn(props.showAsideColumn ? false : true);
    // console.log(props.showAsideColumn);
  };

  return (
    <>
      {props.screen === "desktop" ? (
        <div
          className={props.showAsideColumn ? "active" : "column-studentCpn"}
          onClick={handleShowLab}
        >
          <div className="stt">1</div>
          <div className="name">PS18242 - NGUYEN HOANG THUY MAI</div>
          <div className="icon-down">
            <RightOutlined />
          </div>
        </div>
      ) : (
        <div
          className={
            props.showAsideColumn ? "active-mobile" : "column-studentCpn-mobile"
          }
          onClick={handleShowLab}
        >
          <div className="stt">1</div>
          <div className="name" title="PS18242 - NGUYEN HOANG THUY MAI">
            PS18242 - NGUYEN HOANG THUY MAI
          </div>
          <div className="icon-down">
            <RightOutlined />
          </div>
        </div>
      )}
    </>
  );
};

export default BtnCustom;
