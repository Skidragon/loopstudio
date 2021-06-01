// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import creationCardsData from "public/data/creationCards.json";
export default (req, res) => {
  res.status(200).json(creationCardsData);
};
