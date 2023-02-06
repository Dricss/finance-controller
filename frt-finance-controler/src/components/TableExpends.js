import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { inAxios } from "../axios_confi";
import ModalRegister from "./ModalRegister";
import { useEffect, useState } from "react";
import "./TableExpends.css";

const columns = [
  {
    title: "Name",
    dataIndex: "expenseName",
    width: 150,
  },
  {
    title: "Valor",
    dataIndex: "valor",
    width: 150,
  },
  {
    title: "Date",
    dataIndex: "monthReference",
    width: 200,
  },
  {
    title: "Category",
    dataIndex: "category",
    width: 250,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    width: 150,
  },
];

const TableExpends = () => {
  const deleteExpend = async (id) => {
    try {
      await inAxios.delete(`finances/${id}`);
      alert(`Despesa deletada com sucesso!`);
      getExpends();
    } catch (error) {
      alert(`Erro na exclusão da despesa: ${error.message}`);
    }
  };
  const dateFormat = (expends) => {
    const newExpends = [];
    expends.forEach((element) => {
      const date = new Date(element.monthReference);
      const formatNew = date.toLocaleDateString();
      newExpends.push({
        expenseName: element.expenseName,
        valor: element.valor,
        monthReference: formatNew,
        category: element.category,
        actions: (
          <>
            <ModalRegister
              id={element.id}
              expenseName={element.expenseName}
              valor={element.valor}
              monthReference={formatNew}
              category={element.category}
              handlGetExpends={getExpends}
            />{" "}
            <DeleteOutlined
              onClick={() => {
                deleteExpend(element.id);
              }}
              className={"deleteOutlined"}
            />
          </>
        ),
      });
    });
    return newExpends;
  };
  const [expends, setExpends] = useState([]);

  async function getExpends() {
    try {
      const response = await inAxios.get("/finances");
      setExpends(dateFormat(response.data));
    } catch (error) {
      alert(`Erro... Não foi possível obter dados: ${error}`);
    }
  }

  useEffect(() => {
    getExpends();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={expends}
      pagination={{
        pageSize: 50,
      }}
      scroll={{
        y: 240,
      }}
    />
  );
};

export default TableExpends;
