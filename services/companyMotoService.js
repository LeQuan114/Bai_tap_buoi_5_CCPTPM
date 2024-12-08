// services/CompanyMotoService.js
const CompanyMoto = require('../models/companyMoto');
const db = require('../firebase');

class CompanyMotoService {
  async addCompanyMoto(name, isHide) {
    const newMoto = new CompanyMoto(name, isHide);
    const newDoc = await db.collection('companyMotos').add(newMoto.toObject());
    return { id: newDoc.id, ...newMoto.toObject() };
  }

  async getCompanyMoto(id) {
    const doc = await db.collection('companyMotos').doc(id).get();
    if (!doc.exists) {
      throw new Error(`CompanyMoto with id ${id} not found`);
    }
    return { id: doc.id, ...doc.data() };
  }

}

module.exports = new CompanyMotoService();
