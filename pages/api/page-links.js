// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pageLinksData from "public/data/pageLinks.json";
export default (req, res) => {
  res.status(200).json(pageLinksData);
};
