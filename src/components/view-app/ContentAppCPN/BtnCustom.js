import { RightOutlined } from "@ant-design/icons";

const BtnCustom = (props) => {
  const handleShowLab = () => {
    props.setShowAsideColumn(props.showAsideColumn ? false : true);
    // console.log(props.showAsideColumn);
  };

  return (
    <>
      <div className={props.showAsideColumn ? "active" : "column-studentCpn"}>
        <div className="stt">1</div>
        <div className="name">PS18242 - NGUYEN HOANG THUY MAI</div>
        <div className="icon-down" onClick={handleShowLab}>
          <RightOutlined />
        </div>
      </div>
    </>
  );
};

export default BtnCustom;
