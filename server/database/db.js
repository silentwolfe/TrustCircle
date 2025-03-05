import { MONGO_URI } from "../constants/env";

const mongoose = require("mongoose");

export const connectToDb = async () => {
  await mongoose.connect(MONGO_URI);
};
