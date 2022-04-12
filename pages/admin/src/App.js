import './App.css';
import "./Style/Circle.css";
import Header from './Components/Header/Header';
import {useState, useEffect} from "react";
import KpiData from "./Data/Kpi.json";
import ProductData from "./Data/Product.json";
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement)

function App() {
  const [kpiTitle, setKpiTitle] = useState("Ngày")
  const [kpi, setKPI] = useState(KpiData.filter(item => item.title === "Ngày"))
  useEffect(() => {
    setKPI(KpiData.filter(item => item.title === kpiTitle))
  }, [kpiTitle])
  return (
    <>
    <div className="content">
      <Header title="Dashboard" />
      <div className="box">
        <div className="d-flex flex-wrap">
          <div className="col-3">
              <div className="KPI-box position-relative d-flex flex-column align-items-center">
                  <h3>Thu Nhập Mục Tiêu Hàng {kpiTitle}</h3>
                  <div className="KPI-action">
                    <span className={kpiTitle === "Ngày" ? "Kpi-active" : ""} onClick={() => setKpiTitle("Ngày")}>Ngày</span>
                    <span className={kpiTitle === "Tháng" ? "Kpi-active" : ""} onClick={() => setKpiTitle("Tháng")}>Tháng</span>
                    <span className={kpiTitle === "Năm" ? "Kpi-active" : ""} onClick={() => setKpiTitle("Năm")}>Năm</span>
                  </div>  
                  <div className={`circle-item c100 p${kpi.map(item => (Math.floor(item.money / item.KPI * 100)))}`}>
                      <span>{kpi.map(item => (Math.floor(item.money / item.KPI * 100)))}%</span>
                      <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                  </div>
                <h4>${kpi.map(item => (item.money)) > 1000 ? kpi.map(item => (item.money)) / 1000 : kpi.map(item => (item.money))}</h4>
                <span className="d-inline-block">from ${kpi.map(item => (item.KPI))}</span>
              </div>
              <div className="related-food">
                <h3 className="text-center">Món ăn được đặt nhiều nhất</h3>
                <ul>
                  {ProductData.slice(0,5).map((item, index) => {
                    return <li key={index} className="d-flex align-items-center">
                              <span className="d-inline-block text-center">#{index + 1}</span>
                              <div>
                                <h4>{item.name}</h4>
                                <div><span>${item.price}</span><span>order x84</span></div>
                              </div>
                              <img src={item.image} alt="/" />
                            </li>
                  })}
                </ul>
              </div>
          </div>
          <div className="col-9 chart-line-box">
            <div className="row">
              <div className="col-6">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [210, 121, 178, 90, 156, 110, 133, 120, 99, 78, 150, 129, 111],
                      label: "Khách hàng",
                      borderColor: "#3e95cd",
                      fill: false
                    }
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "Khách hàng trong năm (người)"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ Khách hàng'
                    }
                }
                }}
              />
              </div>
              <div className="col-6">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [250, 164, 220, 146, 240, 180, 190, 240, 199, 178, 300, 269, 310],
                      label: "Đơn đặt hàng",
                      borderColor: "#8e5ea2",
                      fill: false
                    }
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "Đơn hàng trong năm"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ đơn hàng'
                    }
                }
                }}
              />
              </div>
              <div className="col-12 mt-3">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [168, 170, 178, 190, 250, 248, 247, 275, 234, 234, 188, 100],
                      label: "Doanh thu ($)",
                      borderColor: "red",
                      fill: false
                    },
                    {
                      data: [68, 70, 78, 90, 140, 158, 148, 147, 75, 134, 88, 70],
                      label: "Chi phí ($)",
                      borderColor: "#3cba9f",
                      fill: false
                    }
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "Doanh thu ($)"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ doanh thu'
                    }
                  }
                }}
              />
              </div>
              <div className="col-6 mt-3">
              <Doughnut
                data={{
                  labels: [
                    "Đồ ăn",
                    "Đồ uống",
                    "Khác"
                  ],
                  datasets: [
                    {
                      backgroundColor: [
                        "#d72241",
                        "#1c71d3",
                        "#316b81"
                      ],
                      data: [30, 19, 10]
                    }
                  ]
                }}
                option={{
                  title: {
                    display: true,
                    text: "Biểu đồ dịch vụ"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ dịch vụ'
                    }
                  }
                }}
              />
              </div>
              <div className="col-6 mt-3">
              <Doughnut
                data={{
                  labels: [
                    "Nguyên liệu",
                    "Maketing",
                    "Khác"
                  ],
                  datasets: [
                    {
                      label: "Chi phí",
                      backgroundColor: [
                        "#3cba9f",
                        "#f5e038",
                        "#316b81"
                      ],
                      data: [734, 584, 133]
                    }
                  ]
                }}
                option={{
                  title: {
                    display: true,
                    text: "Biểu đồ chi phí"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ chi phí'
                    }
                  }
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default App; 