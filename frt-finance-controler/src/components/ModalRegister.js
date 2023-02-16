import { Modal, Input, Form, Select, Button, DatePicker } from "antd";
import { useEffect, useState } from "react";
import { FormOutlined } from "@ant-design/icons";
import { inAxios } from "../axios_confi";
import dayjs from "dayjs";
import "./ModalRegister.css";

const ModalRegister = (props) => {
  const [categorySelect] = useState([
    "Necessidades Básicas",
    "Liberdade Financeira",
    "Instrução",
    "Diversão",
    "Doações",
  ]);

  const [expenseName, setExpenseName] = useState();
  const [valor, setValor] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();

  const updateExpend = async () => {
    if (date === undefined) {
      setDate(props.monthReference);
    }
    try {
      await inAxios.put(`/finances/${props.id}`, {
        expenseName: expenseName,
        valor: valor,
        monthReference: date,
        category: category,
      });
      handleOk();
    } catch (error) {
      alert(`Erro na alteração de dados: ${error}`);
    }
  };

  // Modal -------
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    props.handlGetExpends();
  }, [loading]);
  return (
    <>
      <FormOutlined onClick={showModal} />
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => updateExpend()}
          >
            Submit
          </Button>,
        ]}
      >
        <Form>
          <label>
            {" "}
            Name:
            <Input
              onChange={(e) => setExpenseName(e.target.value)}
              defaultValue={props.expenseName}
            />
          </label>
          <label>
            Valor:
            <Input
              type="number"
              step={0.01}
              defaultValue={props.valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </label>
          <label>
            Data:
            <DatePicker
              defaultValue={dayjs(props.monthReference, "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
              onChange={(date, dateString) =>
                setDate(dayjs(date, "DD/MM/YYYY"))
              }
              className={"datePicker"}
            />
          </label>
          <label>
            Categoria:
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
              defaultValue={props.category}
              onChange={(value) => setCategory(value)}
            />
          </label>
        </Form>
      </Modal>
    </>
  );
};
export default ModalRegister;
