import express from "express";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
const port = process.env.PORT || 3000;

app.get("/time", (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

app.get("/other", (req, res) => {
  res.json({ message: "This is another API" });
});

// Chỉ chạy listen khi không ở môi trường Vercel
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
