// services/CategoryMotoService.js
const CategoryMoto = require('../models/categoryMoto');
const db = require('../firebase'); // Assuming you've set up Firebase

class CategoryMotoService {
    async addCategoryMoto(name, isHide) {
        const newCategoryMoto = new CategoryMoto(name, isHide);
        const newDoc = await db.collection('categoryMotos').add(newCategoryMoto.toObject());
        return { id: newDoc.id, ...newCategoryMoto.toObject() };
    }

    async getCategoryMoto(id) {
        const doc = await db.collection('categoryMotos').doc(id).get();
        if (!doc.exists) {
            throw new Error(`CategoryMoto with id ${id} not found`);
        }
        return { id: doc.id, ...doc.data() };
    }

}

module.exports = new CategoryMotoService(); // Export an instance of CategoryMotoService
