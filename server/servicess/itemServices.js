
const Items = require('../models/item');

async function find(params) {
    const limit = 10
    const page = Math.max(0, params)
    try {
        const Listitems = await Items.find().limit(limit).skip(limit * page).sort( '-createdOn' )
        const itemsCount = await Items.find().countDocuments();
        const data = {
            Listitems, itemsCount
        }
        return data;
    } catch (error) {
        console.log('Error', error.message);
    }
}

async function createItem(params) {
    try {
        const item = new Items(params);
        await item.save();
        return item;
    } catch (error) {
        console.log('Error', error.message);
    }
}

async function findItem(params) {
    try {
        const listItem = await Items.findOne(params).exec();
        return listItem;
    } catch (error) {
        console.log('Error', error.message);
    }
}

module.exports ={
    find,
    createItem,
    findItem
}