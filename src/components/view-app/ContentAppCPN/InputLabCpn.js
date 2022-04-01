import { CheckOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const InputLabCpn = (props) => {
  let inputScoreLab = document.querySelector(".input-score-lab");
  const [fixScore, setFixScore] = useState(false);

  useEffect(() => {
    setFixScore(false);
  }, [props.checkReset]);

  const handleChangeScoreLab = () => {
    if (fixScore) {
      inputScoreLab.setAttribute("disabled", "true");
    } else {
      inputScoreLab.removeAttribute("disabled");
    }
    setFixScore(fixScore ? false : true);
  };

  return (
    <>
      <div className="form-group-lab">
        <p>
          <label>Lab1</label>
        </p>
        <input
          className="input-score-lab"
          disabled
          type="number"
          max="10"
          min="0"
        />
        <div className="icon-edit-score-lab" onClick={handleChangeScoreLab}>
          {fixScore ? "" : <EditOutlined />}
        </div>
      </div>
    </>
  );
};

export default InputLabCpn;
