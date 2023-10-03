const db = require("../model");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if(!req.body.Name){
        res.status(400).send({
            message: "COntent cannot be empty"
        })
        return;
    }

    const tutorial = {
        id: req.body.id,
        Name: req.body.Name,
        Lastname: req.body.Lastname,
        University: req.body.University,
        Finished: req.body.Finished ? req.body.Finished : false,
        
    }

    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message : "Error 500"
            })
        });
};

exports.findAll = (req, res) => {
    const Name = req.body.Name;
    var condition = Name ? {Name: {[Op.like]: `%${Name}%`}} : null; // ถ้ามีค่าเก็บค่า Name ลงที่ {Name: {[Op.like]: `%${Name}%`}} แต่ถ้าไม่มีคือ null

    Tutorial.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(error =>{
        res.status(500).send({
            message:"Some error Occurred!"
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message : "Error 404" + id
                })
            }
        })
        .catch(Error => {
            res.status(500).send({
                message : "Error 500 " + id
            });
        });
};

exports.findAllFinished = (req, res) => {
    Tutorial.findAll({ where: { Finished: true}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message : "Error 500"
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;
    Tutorial.update(req.body, {where: {id:id}})
    .then(num => {
        if(num = 1){
            res.send({
                message: "Update successfly!"
            })
        }else{
            res.send({
                message: "Upadate failled!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error Update!"
        })
    })
};
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.destroy({where: {id:id}})
    .then(num => {
        if(num == 1){
        res.send({
            message: "Delete successfly!"
        })
        }else{
        res.send({
            message: "Delete failled!!!"
        })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error Delete 500!!!"
        })
    })
};
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where:{},
        truncate: false
    })
    .then(num => {
        res.send({message : "Deleted Sucessfully!"})
    })
    .catch(err => {
        res.status(500).send({
            message: "Error Delete 500!!!"
        })
    });
};