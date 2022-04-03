import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "../public/css/listStudent.css";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";
const fileName = "Deadline"; // here enter filename for your excel file

const exportToCSV = (apiData, fileName) => {
  const ws = XLSX.utils.json_to_sheet(apiData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

// const [data, setData] = React.useState([])

//useEffect(() => {
//   const fetchData = () =>{
//    axios.get('https://623e864ae8fbc4f1626feab0.mockapi.io/test').then(r => setData(r.data) )
//   }
//   fetchData()
// }, [])
