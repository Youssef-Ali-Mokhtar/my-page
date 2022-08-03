import "./ExpensesProjectContainer.css";
import fileDownload from "js-file-download";
import Axios from "axios";
import testFile from "../../assets/expenses.xlsx";

const ExpensesProjectContainer = () => {
  const downloadTestFile = (e) => {
    e.preventDefault();
    Axios({
      url: testFile,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, "expenses.xlsx");
    });
  };

  return (
    <div className="expenses-container">
      <div className="expenses-text-section">
        <div className="expenses-text-container">
          <h1>Expenses Analyzer</h1>
          <ul>
            <li>Excel sheet expenses analyzer</li>
            <li>Drag and drop or browse your local drive to upload the file</li>
            <li>
              Insert your salary and select a year to get a report on your
              expenses
            </li>
            <li>Hover over the charts to select a month for further details</li>
          </ul>
          <div className="tech-items-container">
            <div className="tech-item">HTML</div>
            <div className="tech-item">CSS</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">React</div>
          </div>
          <div className="tech-items-container">
            <div
              className="test-file-button"
              onClick={(e) => {
                downloadTestFile(e);
              }}
            >
              Download Test File
            </div>
            <div className="test-file-button">
              <a
                target="_blank"
                href="https://youssef-ali-mokhtar.github.io/expenses-analysis/"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="expenses-image-section">
        <img
          className="expenses-image"
          src="https://i.imgur.com/x2wniHI.png"
          alt="expenses analyzer"
        />
      </div>
    </div>
  );
};

export default ExpensesProjectContainer;
