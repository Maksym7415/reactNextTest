import db from '../../db';

export default (req, res) => {
  const payload = db.Categories
  res.statusCode = 200;
  res.json(payload)
}