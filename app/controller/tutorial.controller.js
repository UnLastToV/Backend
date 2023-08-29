const db = require("../model");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    
};

exports.findAll = (req, res) => {
    const title = req.body.title;
    var condition = title ? {title: {[Op.like]: `%${title}%`}} : null; // ถ้ามีค่าเก็บค่า title ลงที่ {title: {[Op.like]: `%${title}%`}} แต่ถ้าไม่มีคือ null

    Tutorial.findAll({whewe : condition})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err. message || "Some error Occurred!"
        });
    });
};

exports.findOne = (req, res) => {
    
};

exports.findAllPublished = (req, res) => {
    
};

exports.update = (req, res) => {
   
};
exports.delete = (req, res) => {
    
};
exports.deleteAll = (req, res) => {
    
};