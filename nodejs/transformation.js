// BOILER_CODE_START

import crypto from 'crypto'

class EventNotSupportedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'EventNotSupportedException';
        this.statusCode = 451;
        this.msg = message;
    }
}

class InvalidEventPayloadException extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 452;
        this.name = 'InvalidEventPayloadException';
        this.msg = message;
    }
}

class RetryErrorException extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 453;
        this.name = 'RetryErrorException';
        this.msg = message;
    }
}

function generateSha256Hash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

export const handler = async (event, res) => {
    try {
        let obj = event.body;
        
        modifyObj(obj);

        res.setHeader('Content-Type', 'application/json');

        res.send(JSON.stringify(obj));
    } catch (error) {
        console.error(error);
        res.statusCode = error.statusCode || 500;
        res.setHeader('Content-Type', 'application/json');
        if (res.statusCode === 500) {
            res.send(JSON.stringify({ message: error.message }));
        } else {
            res.send(JSON.stringify(error));
        }
    }
};

// BOILER_CODE_END

%code%
