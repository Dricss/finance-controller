import { useState } from "react";
import { Form, Input, DatePicker, Select, Button, Col, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { inAxios } from "../axios_confi";
import dayjs from "dayjs";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [categorySelect] = useState([
    "Necessidades Básicas",
    "Liberdade Financeira",
    "Instrução",
    "Diversão",
    "Doações",
  ]);
  const [name, setName] = useState();
  const [value, setValue] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();

  const saveExpense = async () => {
    const fields = {
      expenseName: name,
      valor: value,
      monthReference: date,
      category: category,
    };

    try {
      const response = await inAxios.post("/finances/register", fields);
      console.log(response);
      alert(`Despesa inserida com sucesso`);
    } catch (error) {
      alert("Erro ao enviar dados...");
    }
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Form className="form" onFinish={saveExpense}>
          <Form.Item label="Name">
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Valor">
            <Input
              type="number"
              step={0.01}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Data">
            <DatePicker
              className="datePicker"
              format={"DD/MM/YYYY"}
              onChange={(date, dateString) =>
                setDate(dayjs(date, "MM/DD/YYYY"))
              }
            />
          </Form.Item>
          <Form.Item label="Categoria">
            <Select
              placeholder={"Selecione..."}
              id="categorySelect"
              style={{
                width: "100%",
              }}
              options={categorySelect.map((element) => ({
                label: element,
                value: element,
              }))}
              onChange={(value) => setCategory(value)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterForm;
