import { Response } from "express";
import { ObjectId } from "mongodb";
import { getDbCollection } from "../db/dbConnection";
import { CustomRequest } from "../types/customRequest";

export const dashboard = async (req: CustomRequest, res: Response) => {
  const user = req.user;

  try {
    const dbUser = await getDbCollection().findOne({
      _id: new ObjectId(user?._id),
    });

    if (dbUser) {
      const { _id, email, username } = dbUser;
      return res.status(200).json({
        message: "Welcome to Dashboard",
        user: {
          _id,
          email,
          username,
        },
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
