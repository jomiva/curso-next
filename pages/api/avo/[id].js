import Database from '../../../database/db';

const Avocado = async (req, res) => {
  const db = new Database();
  const id = req.query.id;
  const data = await db.getById(id);
  res.status(200).json(data);
};

export default Avocado;
