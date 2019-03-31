import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

//
//'100'+'50' = 10050
// req.query.key1
router.get("/getData",  (req, res) => {
    let result = Number(req.query.key1) +  Number(req.query.key2);
    res.send({ sum: result })
});



//base = 10
//height = 20
router.get("/getTriangleArea",  (req, res) => {
    let result = (1/2)*req.query.base*req.query.height;
    res.send({ triangleArea: result })
});
router.get("/getBMI",  (req, res) => {
    let height = req.query.height/100
    let weight = req.query.weight
    let result = weight/(height*height);
    let msg = "";
    if(result>25){
        msg = "Fat"
    }else if(result==25){
        msg = "Normal"
    }else if(result<25){
        msg = "Thin"
    }
    result = Number(result.toFixed(2));
    res.send({ bmi: result , msg:msg })
});

/*
Request
key 
* */
//if (value) value ='',value=null ,value=undefined return false
router.post("/postData",async  (req, res) => {
    responseObject = {
        msg: "",
        result: ""
    }
     if(!req.body.key){
         responseObject.msg = "Bad request";
     }else{
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
    }
    res.send(responseObject);
});

module.exports = router;
