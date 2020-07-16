import db from '../../../../db';

export default (req, res) => {
  const {
    query: {id}
  } = req
  const payload = db.Categories;
  res.statusCode = 200;
  res.json(payload.filter((item) => item.id === +id)[0].goods);
}