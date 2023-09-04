const { StatusCodes } = require('http-status-codes')
const {userInputValidation, loginInputValidation} = require('../utils/joi-validation');
const CustomError = require('../errors');
const {UserModel} = require('../models/user_models')

const userSignUp = async(req,res)=>{
    const { error, value } = userInputValidation.validate(req.body);

    if(error){
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.details });
    }

    const existingUser = await UserModel.findOne({email: value.email})

    if(existingUser){
        throw new CustomError.BadRequestError('user already exist')
    }

    if(value.password != value.confirmPassword){
        throw new CustomError.BadRequestError('password field is not the same as confirm password')
    }
    
    const newUser = await UserModel.create({firstName: value.firstName, lastName: value.lastName,email: value.email, birthDate: value.birthDate, city: value.city, country: value.country,password: value.password});

    res.status(StatusCodes.CREATED).send('User created')
    return;
}


const userLogin = async(req,res)=>{
    const { error, value } = loginInputValidation.validate(req.body);

    if(error){
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.details });
    }

    const existingUser = await UserModel.findOne({email: value.email})

    if(!existingUser){
        throw new CustomError.BadRequestError('user does not exist')
    }

   const isMatch = await existingUser.comparePassword(value.password);

    if(!isMatch){
        throw new CustomError.UnauthenticatedError('user credentials is invalid')
    }

    res.status(StatusCodes.OK).send('User logged in successfully')

    return;
}

module.exports = {userSignUp, userLogin}
