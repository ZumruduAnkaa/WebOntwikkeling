import express from "express";
import { error } from "node:console";

const app = express();

app.set("port", 3000);

app.get("/:operator", (req,res) => {
    if (typeof req.query.a !== "string" || typeof req.query.b !== "string") {
        res.json({ error : "oth query parameters (a,b) have to be specified."});
        return;
    }

    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        res.json({ error: "Both query parameters (a,b) have to be of type number."});
        return;
    }

    let operator = req.params.operator;

    if (operator === "add") {
        res.json({ result : a + b });
    } else if (operator === "min") {
        res.json({ result : a - b });
    } else if (operator === "mult") {
        res.json({ result : a * b });
    } else if (operator === "div") {
        if (b === 0) {
            res.json({ error : "Division by 0 is not allowed."});
        }else{
            res.json({ result : a / b });
        }
    } else {
        res.json({ error : "Unknown operator." });
    }
})

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);