import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../config/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    try {
        const products = await db.collection("products").find({}).toArray();
        res.json({ status: 200, data: products });
    } catch (err: any) {
        console.log({ err, message: err.message });
    }
}
