const express = require('express');
const app = express();
const companyMotoRoutes = require('../lib/routes/companyMotoRoutes'); 
const categoryMotoRoutes = require('../lib/routes/categoryMotoRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/companyMoto', companyMotoRoutes);

app.use('/api/categoryMoto', categoryMotoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
