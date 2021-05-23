const programmingLenguages  =   require('../services/programmingLenguages');

const controller = {
    getMultiple: async (req, res, next) => {
        try {
            res.json(await programmingLenguages.getMultiple(req.query.page));
        }
        catch(e){
            console.error('error while getting data from DB', e.message);
            next(e);
        }
    },
    create: async (req, res, next) => {
        try {
            res.json(await programmingLenguages.create(req.body));
        }
        catch(e){
            console.error('error while creating programming leanguage', e.message);
            next(e);
        }
    }, 
    update: async (req, res, next) => {
        try{
            res.json(await programmingLenguages.update(req.params.id, req.body));
        }catch(e){
            console.error('error updating the programming leanguage', e.message);
            next(e);
        }
    },
    delete: async (req, res, next) => {
        try{
            res.json(await programmingLenguages.deleteRow(req.params.id));
        }catch(e){
            console.error('error deleting the programming leanguage', e.message);
            next(e);
        }
    }
}
module.exports = controller;