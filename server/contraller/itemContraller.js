
const itemServices = require('../servicess/itemServices');


async function getListItems(req, res) {
    const { page } = req.query;
    try {
        const Listitems = await itemServices.find(page ? page : 0)
        res.status(200).json({status: true, Listitems})
    } catch (error) {
        res.status(500).json({status: false, error})
    }
}

async function addItemToList(req, res) {
    console.log("req.body", req.body);
    const data = req.body;
    try {
        const item = await itemServices.createItem(data)
        // const item = await itemServices.createItem({ 
        //     title: data.title,
        //     description: data.desc
        // })
        res.status(200).json({status: true, item})
    } catch (error) {
        res.status(500).json({status: false, error})
    }
}

async function getItemFromList(req, res) {
    const { id } = req.params;
    try {
        const item = await itemServices.findItem({ _id: id });
        console.log("item", item);
        res.status(200).json(item ? {status: true, item} : { item: "No Item" })
        
    } catch (error) {
        res.status(500).json({status: false, error})
    }
}

module.exports ={
    getListItems,
    addItemToList,
    getItemFromList
}