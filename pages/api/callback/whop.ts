import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    const { query, body } = req;
    console.log(query);
    console.log(body);
    res.status(200).json({ok: true});
};

export default handler;
