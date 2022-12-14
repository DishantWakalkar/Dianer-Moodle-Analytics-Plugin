import React, {useState,useEffect} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Card from 'react-bootstrap/Card';

const BarChart = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/getQuiz").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const data = {
    labels: backendData.map(d=>d.name),
    datasets: [
      {
        label: "Grade",
        backgroundColor: "rgba(153, 102, 255, 1)",
        borderColor: "rgba(153, 102, 255, 1)",
        data: backendData.map(d=>d.grade),
      },
    ],
  };
  return (
    <div>
      <Card style={{ width: 'auto' }}>
        <Card.Body>
          <Bar data={data} />
        </Card.Body>
       </Card>
    </div>
  );
};

export default BarChart;