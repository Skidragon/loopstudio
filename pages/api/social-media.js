// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import socialMediaData from "public/data/socialMedia.json";
export default (req, res) => {
  res.status(200).json(socialMediaData);
};
