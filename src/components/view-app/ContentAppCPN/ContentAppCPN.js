import { ExportOutlined } from "@ant-design/icons";
import {
  DeleteOutlined,
  ImportOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useState, useEffect } from "react";
import BtnCustom from "./BtnCustom";
import CpnLabCustom from "./CpnLabCustom";
import CpnLabMobileCustom from "./CpnLabMobileCustom";
import ModalCheckImport from "./modalCheckImport";
import useWindowDimensions from "./useWindowDimensions";

const ContentAppCPN = () => {
  // useState
  const { heightScreenClient, widthScreenClient } = useWindowDimensions();
  const [screen, setScreen] = useState("desktop");
  const [nameFile, setNameFile] = useState("");
  const [showAsideColumn, setShowAsideColumn] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [state, setState] = useState({
    size: "large",
  });

  const { size } = state;

  // useEff

  useEffect(() => {
    console.log(widthScreenClient);
    if (widthScreenClient <= 1000) {
      setScreen("mobile");
      document.querySelector(".ant-layout-sider").style.display = "none";
    } else {
      setScreen("desktop");
    }
  }, [widthScreenClient]);

  // handle Fnc
  const handleUpLoad = (e) => {
    let fileUpload = document.getElementById("fileUpload");
    setNameFile(fileUpload.value);
    setTimeout(() => {
      setToggleModal(true);
    }, 500);
  };

  const deleteFile = () => {
    setNameFile("");
  };

  return (
    <>
      {screen === "desktop" ? (
        <div className="list_student-container">
          <div className="row">
            <div className="title">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h3 style={{ padding: "0rem 1rem" }}>
                  WEB501 - Lập trình ECMA Script - WEB16301_3
                </h3>
                <p className="iconSetting">
                  <SettingOutlined />
                </p>
              </div>
              <Button
                className="btn-import"
                type="primary"
                icon={<ImportOutlined />}
                size={size}
              >
                <label
                  style={{
                    cursor: "pointer",
                    padding: ".5rem",
                  }}
                  htmlFor="fileUpload"
                >
                  {" "}
                  Import
                </label>
                <input
                  id="fileUpload"
                  type="file"
                  style={{
                    display: "none",
                    cursor: "pointer",
                  }}
                  onChange={(e) => handleUpLoad(e)}
                />
              </Button>
              <Button
                className="btn-import"
                type="primary"
                icon={<ExportOutlined />}
                size={size}
              >
                Export
              </Button>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <div className="boxFile">
                  <p className="nameFile" title={nameFile}>
                    {nameFile}
                  </p>
                  <p onClick={deleteFile}>
                    {nameFile === "" ? "" : <DeleteOutlined />}
                  </p>
                </div>
              </div>
            </div>
            <div className="big-column">
              <div className="column-student">
                <BtnCustom
                  screen={"desktop"}
                  showAsideColumn={showAsideColumn}
                  setShowAsideColumn={setShowAsideColumn}
                />
              </div>
              <div className="column-lab">
                <div className="header-empty">THÔNG TIN SINH VIÊN</div>
                <CpnLabCustom showAsideColumn={showAsideColumn} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="list-student-container-mobile">
          <div className="row-mobile">
            <div className="title-mobile">
              <h3>WEB501 - Lập trình ECMA Script - WEB16301_3</h3>
              <div>
                <Button
                  className="btn-import-mobile"
                  type="primary"
                  icon={<ImportOutlined />}
                  size={"small"}
                >
                  <label
                    style={{
                      cursor: "pointer",
                      padding: ".5rem",
                    }}
                    htmlFor="fileUpload"
                  >
                    {" "}
                    Import
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    style={{
                      display: "none",
                      cursor: "pointer",
                    }}
                    onChange={(e) => handleUpLoad(e)}
                  />
                </Button>
                <Button
                  className="btn-import-mobile"
                  type="primary"
                  icon={<ExportOutlined />}
                  size={"small"}
                >
                  Export
                </Button>
              </div>
            </div>
            <div className="column-student-mobile">
              <BtnCustom
                screen={"mobile"}
                showAsideColumn={showAsideColumn}
                setShowAsideColumn={setShowAsideColumn}
              />
            </div>
            <div className="column-lab-mobile">
              <CpnLabMobileCustom showAsideColumn={showAsideColumn} />
            </div>
            {toggleModal && (
              <ModalCheckImport
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
                nameFile={nameFile}
                deleteFile={deleteFile}
              />
            )}
            dd
          </div>
        </div>
      )}
    </>
  );
};

export default ContentAppCPN;
