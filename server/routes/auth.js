const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const {validationResult} = require('express-validator');
const {login} = require('../controllers/auth');

const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}
router.post('/login' , [
    check('email' , 'Email is required').isEmpty() ,
    check('password' , 'Passsword is  requied').not().isEmpty(),
    validateInput
], login);

module.exports = router;