module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial",{
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