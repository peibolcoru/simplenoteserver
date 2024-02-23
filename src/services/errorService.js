module.exports ={
    
    userAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'USER_ALREADY_REGISTERED',
            message: 'Username is already registered',
        };
    },

    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'The email is already registered',
        };
    },
    missingFieldsError(){
        throw{
            httpStatus:400, // Bad Request
            code:"MISSING FIELDS",
            message:"Fields are missing"
        }
    },

    invalidCredentialsError() {
        throw  {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid credentials',
        };

    },
    notFoundError(resource = '') {
        throw {
            httpStatus: 404, // Not found
            code: 'RESOURCE_NOT_FOUND',
            message: `The required resource "${resource}" does not exist`,
        };
    },
    saveFileError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'FILE_SAVE_FAILED',
            message: 'Error saving file to disk',
        };
    },
    deleteFileError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'FILE_DELETE_FAILED',
            message: 'Error deleting file from disk',
        };
    },
    notAuthenticatedError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'NOT_AUTHENTICATED',
            message: "You must send a token in the 'Authorization' header",
        };
    },
    unauthorizedUserError() {
        throw {
            httpStatus: 403, // Forbbiden
            code: 'UNAUTHORIZED',
            message: 'The user is not authorized to do this operation',
        };
    },
    invalidTokenError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_TOKEN',
            message: 'Invalid Token',
        };
    },
    wallAlreadyRegisteredError(){
        throw {
            httpStatus: 409, // Conflict
            code: 'WALLTITLE_ALREADY_REGISTERED',
            message: 'There is already a wall with that name',
        };
    },
    emptyWallNotesError(){
        throw {
            httpStatus: 204, 
            code: 'No Content',
            message: 'There are no notes created on the wall',
        };
    },
} 