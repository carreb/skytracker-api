const router = require('express').Router();
const express = require('express');
const NPCItem = require('../models/NPCItem');
const {devAuth} = require('../utils/devAuth');

router.get('/', async (req, res) => {
    // Display all NPC items in this format:
    // item: price
    try {
        const items = await NPCItem.find();
        let response = {};
        items.forEach(item => {
            response[item.item] = item.price;
        });
        res.send(response);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/', devAuth, async (req, res) => {
    const npcItem = new NPCItem({
        item: req.body.item,
        price: req.body.price
    });
    try {
        const newNPCItem = await npcItem.save();
        res.status(201).json(newNPCItem);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.patch('/', devAuth, async (req, res) => {
    try {
        const npcItem = await NPCItem.findOne({item: req.body.item});
        if (npcItem == null) {
            return res.status(404).json({message: 'Cannot find NPC item'});
        }
        if (req.body.price != null) {
            npcItem.price = req.body.price;
        }
        const updatedNPCItem = await npcItem.save();
        res.json(updatedNPCItem);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.delete('/', devAuth, async (req, res) => {
    try {
        const npcItem = await NPCItem.findOne({item: req.body.item});
        if (npcItem == null) {
            return res.status(404).json({message: 'Cannot find NPC item'});
        }
        await npcItem.remove();
        res.status(200).json({message: 'Deleted NPC item'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;