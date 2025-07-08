import express from "express";
import cors from "cors";
import businessRoutes from "./routes/businessRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// mount feature routes
app.use("/", businessRoutes);

// boot
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server Running on port http://localhost:${PORT}`)
);

app.get("/", (_req, res) =>
  res.send("<h1>Welcome to the Mini Local Business Dashboard API</h1>")
);
