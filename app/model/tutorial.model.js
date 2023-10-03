module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial",{
        id	: {
            type: Sequelize.INT
        },
        Name	: {
            type: Sequelize.STRING
        },
        Lastname: {
            type: Sequelize.STRING
        },
        University: {
            type: Sequelize.STRING
        },
        Finished: {
            type: Sequelize.BOOLEAN
        }
    });
    return Tutorial;
};