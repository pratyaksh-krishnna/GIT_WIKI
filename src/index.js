import express from "express"
import "dotenv/config";
import { inngest, functions } from "./inngest/index.js"
import { serve } from "inngest/express";

const app = express();
app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/health", (req, res) => {
    res.send("helloworld")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})