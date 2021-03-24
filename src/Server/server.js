const { Sequelize, Model, DataTypes } = require('sequelize')

// const sequelize = new Sequelize('Zoya_react_ov4', 'Zoya_ov4', 'H587ta', {
//     host: '109.206.169.221',
//     dialect: 'mysql'
// });


const sequelize = new Sequelize('dogs', 'root', 'baf5V7Vo', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

class Patient extends Model { }
Patient.init({
    LastName: DataTypes.STRING,
    Name: DataTypes.STRING,
    Patronymic: DataTypes.STRING,
    Diagnosis: DataTypes.STRING
}, { sequelize, modelName: 'patient' });


(async () => {
    await sequelize.authenticate()
    await sequelize.sync();
    console.log('Successful connection to the Database');
    start()
})();  


function start() {

    const express = require('express')
    const app = express()

    app.use('/api', express.json)

    app.get('/api/inputPatients', async(req, res) => {
        const patients = await Patient.findAll()
        res.send(patients)
    })
    
    app.post('/api/patient', async(req,res) => {
        const result = await Patient.create(req.body)
        res.status(201).send(result)
    })

    app.listen(4000, () => {
        console.log('Successful started on http://localhost:4000')
    })

}
