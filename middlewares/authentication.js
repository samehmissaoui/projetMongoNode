const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../shared-services/Errors');
const {isTokenValid} = require('../utils')
const {attachCookiesToResponse} = require('../utils')
const {isValidTokenService} =require('../token/tokenService');
const { StatusCodes } = require('http-status-codes');


const auth = async (req, res, next) => {
  const {refreshToken, accessToken} = req.signedCookies;
  try {
    if(accessToken) {
      const payload = isTokenValid(accessToken)
      req.user = payload.user
      return next()
    }
    const payload = isTokenValid(refreshToken)
    const existingToken = await isValidTokenService({
      user: payload.user.id,
      refreshToken: payload.refreshToken
    })
    if(!existingToken || !existingToken?.isValid){
      return res.status(StatusCodes.UNAUTHORIZED).send('Authentication Invalid')
    }
    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken[0].refreshToken
    });
    res.user = payload.user
    next()
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).send('Authentication Invalid -catched')
    
  }
};
module.exports = auth;