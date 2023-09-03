const { StatusCodes } = require('http-status-codes')
const {userInputValidation} = require('./src/controllers/user_controller.js')

const userSignUp = async(res, req)=>{
    const { error, value } = userInputValidation.validate(req.body);

    // if(error){
    //     throw new 
    // }
}
