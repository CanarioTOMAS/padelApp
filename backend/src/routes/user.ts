import express from "express";

const api = express.Router();

api.get("/user", (_req, res) => {
   
    res.send('Fetcheng all entry diaries')
   
});

api.post("/", (_req, res) => {
    res.send('Savig a diary!')
});

export default api