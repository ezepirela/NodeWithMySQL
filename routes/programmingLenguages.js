const   express     =   require('express'),
        router      =   express.Router(),
        controller  =   require('../controllers/programmingLenguages');

router.get('/', controller.getMultiple);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete)
module.exports = router;