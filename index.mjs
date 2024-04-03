import express, { static as static_ } from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const upload = multer({
  dest: "uploads/",
});
// Basic Configuration

app.use(cors());
app.use("/public", static_(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  return res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
