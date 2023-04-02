import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/plots";
import { inAxios } from "../axios_confi";

const PieTest = ({ rangePicker, getTotal }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData("");
      try {
        if (rangePicker.length === 0) {
          const response = await inAxios.post("/finances/dashboard", {
            monthInit: "2023-01-01",
            monthEnd: "2023-12-31",
          });
          response.data.forEach((element) => {
            const newObject = {
              category: String(element.category),
              totalvalor: Number(element.totalvalor),
            };
            setData((prevArray) => [...prevArray, newObject]);
          });
          setIsLoading(false);
          getTotal(response);
        } else {
          const response = await inAxios.post("/finances/dashboard", {
            monthInit: rangePicker[0],
            monthEnd: rangePicker[1],
          });
          response.data.forEach((element) => {
            const newObject = {
              category: String(element.category),
              totalvalor: Number(element.totalvalor),
            };
            setData((prevArray) => [...prevArray, newObject]);
          });
          setIsLoading(false);
          getTotal(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [rangePicker, getTotal]);

  const config = {
    appendPadding: 10,
    data,
    angleField: "totalvalor",
    colorField: "category",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return <Pie {...config} />;
};

export default PieTest;
