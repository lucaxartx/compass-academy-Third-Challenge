const { StatusCodes } = require('http-status-codes')
const {eventCreatingValidation} = require('../utils/joi-validation');
const CustomError = require('../errors');
const { UserModel } = require('../models/user_models');
const EventModel = require('../models/events_models');


const createEvents = async (req, res)=>{

    const { error, value } = eventCreatingValidation.validate(req.body);

    if(error){
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.details });
    }

    const {userId} = req.user;

    const user = await UserModel.findById(userId);

    if(!user){
        throw new CustomError.BadRequestError('user with token not found')
    }

    const newEvents = await EventModel.create({
        userId: userId,
        description: value.description,
        dayOfWeek: value.dayOfWeek
    })


    res.status(StatusCodes.OK).json({
        "_id": newEvents._id,
        "description": newEvents.description,
        "dayOfWeek": newEvents.dayOfWeek,
        "userId": newEvents.userId
    });

    return;



}


module.exports = {createEvents}