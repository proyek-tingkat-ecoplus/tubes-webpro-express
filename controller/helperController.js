const helperService = require("../service/helperService");
const validate= require("../validation/helper.validation");

exports.index = async (req, res) =>  {
    const output = await helperService.showData();
    return res.json(output);
};

exports.show = async (req, res) => {
    const output = await helperService.showDataById(req.params.id);
    return res.json(output);
}

exports.store = async (req, res) => {
    const {error} = validate.validateHelper(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});
    const output = await helperService.createData(req);
    return res.json(output);
}

exports.update = async (req, res) => {
    const {error} = validate.validateHelper(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});
    if(!req.params.id) return res.status(400).send({message: "Id is required"});
    const output = await helperService.updateData(req.params.id, req);
    return res.json(output);
}

exports.destroy = async (req, res) => {
    const output = await helperService.deleteData(req.params.id);
    return res.json(output);
}