const express = require("express");
const router = express.Router();
const cors = require("cors");
const dbKnex = require("./data/db_config");

router.use(cors({ origin: "http://localhost:3000" }));

router.get("/", async (req, res) => {
  try {
    const expenses = await dbKnex("recordExpense").orderBy("id", "desc");
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

router.post("/register", async (req, res) => {
  const { expenseName, valor, monthReference, category } = req.body;
  if (!expenseName) {
    res.status(400).json({ msg: "Send expenseName!" });
    return;
  }
  if (!valor) {
    res.status(400).json({ msg: "Send Valor!" });
    return;
  }
  if (!monthReference) {
    res.status(400).json({ msg: "Send MonthReference" });
    return;
  }
  if (!category) {
    res.status(400).json({ msg: "Send Category" });
    return;
  }

  try {
    const id = await dbKnex("recordExpense").insert({
      expenseName,
      valor,
      monthReference,
      category,
    });
    res.status(201).json({ id });
  } catch (error) {
    res.status(400).json({ msg: "Erro ao inserir dados" + error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { expenseName, valor, monthReference, category } = req.body;
  try {
    await dbKnex("recordExpense")
      .update({ expenseName, valor, monthReference, category })
      .where("id", id);
    res.status(200).json({ expenseName, valor, monthReference, category });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await dbKnex("recordExpense").del().where({ id });
    res.status(200).json({ msg: `Expend with id ${id} is deleted` });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/dashboard", async (req, res) => {
  const { monthInit, monthEnd } = req.body;
  try {
    const response = await dbKnex("recordExpense")
      .select("category", dbKnex.raw("SUM(valor) as totalValor"))
      .from("recordExpense")
      .groupBy("category")
      .whereBetween("monthReference", [`${monthInit}`, `${monthEnd}`]);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
