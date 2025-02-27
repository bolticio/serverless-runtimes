// BOILER_CODE_START

import crypto from 'crypto'

class EventNotSupportedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'EventNotSupportedException';
        this.statusCode = 451;
        this.message = message;
    }
}

class InvalidEventPayloadException extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 452;
        this.name = 'InvalidEventPayloadException';
        this.message = message;
    }
}

class RetryErrorException extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 453;
        this.name = 'RetryErrorException';
        this.message = message;
    }
}

function generateSha256Hash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

export const handler = async (req, res) => {
    try {
        const obj = req.body;
        modifyObj(obj);
        res.json(obj);
    } catch (error) {
        console.error(error);
        const statusCode = error.statusCode || 500;
        res.statusCode = statusCode;
        res.send(JSON.stringify(statusCode === 500
            ? { message: error.message }
            : { name: error.name, message: error.message, statusCode }));
    }
};

// BOILER_CODE_END

%code%
