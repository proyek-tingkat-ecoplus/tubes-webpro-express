const {Helper} = require('../models');

exports.showData = async () => {
    return {
        data: await Helper.findAll()
    };
}

exports.showDataById = async (id) => {
    return await Helper.findByPk(id);
}

exports.createData = async (val) => {
    const {name , detail} = val.body;
    var create = await Helper.create({
        name: name,
        detail: detail
    });
    return {
        message: "Data Created",
        data: create
    }
}

exports.updateData = async (id , val) => {
    const {name , detail} = val.body;
    var data = await Helper.findByPk(id);
    if(!data) {
        return {
            message: "Data Not Found"
        }
    }
    data.update({
        name: name,
        detail: detail
    },{
        where: {
            id: id
        }
    });
    return {
        message: "Data Updated",
    }
}

exports.deleteData = async (id) => {
    var del = await Helper.destroy({
        where: {
            id: id
        }
    });
    return {
        message: "Data Deleted",
        data: del
    }
}

