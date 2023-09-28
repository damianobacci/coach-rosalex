import Form from "./components/UserInput/Form";
import Table from "./components/ResultsTable/Table";
import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [dataToRender, setDataToRender] = useState([]);

  const saveDataHandler = (yearlyData) => {
    const data = [...yearlyData];
    setDataToRender(data);
  };

  const formResetter = () => {
    setDataToRender([]);
  };
  return (
    <div>
      <Header />
      <Form onSentData={saveDataHandler} onReset={formResetter} />
      {dataToRender.length > 0 ? (
        <Table data={dataToRender} />
      ) : (
        <table className="result">
          <tbody>
            <tr>
              <td>Insert some data to calculate</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
