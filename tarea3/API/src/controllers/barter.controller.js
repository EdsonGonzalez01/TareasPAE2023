const model = require('./../models/barter');
const mongoose = require('mongoose');

module.exports = {
    list: (req, res) => {
        model.find({}).lean().then(response => {
            console.log(response);
            res.status(200).send(response);
        });
    },
    create: (req, res) => {
        const barter = req.body;
        model.create(barter)
            .then(result => {
                res.status(201).send(result);
            })
            .catch(error => {
                console.error('Error creating document:', error);
                res.status(500).send('Error creating document');
            });
    },
    update: async (req, res) => {
        const id= req.params.id; 
        const updateData = req.body; 

        try {
            const updatedDocument = await model.findOneAndUpdate({ _id: id }, updateData, { new: true });

            if (updatedDocument) {
                console.log('Updated document:', updatedDocument);
                res.status(200).send(updatedDocument);
            } else {
                res.status(404).send('Document not found');
            }
        } catch (error) {
            console.error('Error updating document:', error);
            res.status(500).send('Error updating document');
        }
    },
    delete: async (req, res) => {
        const id = req.params.id; // Assuming the ID is passed as a route parameter

        try {
            const deletedDocument = await model.findOneAndDelete({ _id: id });
            if (deletedDocument) {
                console.log('Deleted document:', deletedDocument);
                res.status(200).send('Document deleted successfully');
            } else {
                res.status(404).send('Document not found');
            }
        } catch (error) {
            console.error('Error deleting document:', error);
            res.status(500).send('Error deleting document');
        }
    }
};
