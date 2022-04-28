import clientPromise from "@/config/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

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
    // switch (req.method) {
    //     // case "POST":
    //     //   let bodyObject = JSON.parse(req.body);
    //     //   let newPost = await db.collection("products").insertOne(bodyObject);
    //     //   res.json(newPost.ops[0]);
    //     //   break;
    //     case "GET":
    //         const products = await db.collection("products").find({}).toArray();
    //         res.json({ status: 200, data: products });
    //         break;
    // }
}
