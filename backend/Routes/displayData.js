const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        console.log(global.food_Item);
        res.send(global.food_Item);
    } catch (error) {
        console.log("Error Food Data: " + error.message)
        res.send("Server Error: " + error);
    }
})

module.exports = router;