const User = require('../models/user');
exports.userSignupValidator = async(req, res, next) => {
    //const user = new User(req.body);
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with same email already exists!" });
    }
    req.check('name', 'Name is required').notEmpty();
    req.check('email','email required').notEmpty();
    req.check('email', 'Email must be between 3 and 32 characters')
    .matches(/.+\@.+\..+/).withMessage('Email must contain @').isLength({
        min: 4, max: 32
    });
    
    req.check('password', 'Password is required').notEmpty()
    
    req.check('password').isLength({min: 6}).withMessage('Password must contain at least 6 characters')
    .matches(/\d/).withMessage("Password must contain a number");

    const errors = req.validationErrors()
    if(errors) 
    {
        const firstError = errors.map(error => error.msg)[0];

        return res.status(400).json({error: firstError});
    }

    next();
    
};