// BOILER_CODE_START
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

function onTrack(obj) {
    console.log("Handling track event.");
    throw new EventNotSupportedException('anuj');
}

function onPage(obj) {
    console.log("Handling page event.");
    throw new InvalidEventPayloadException('sahuuu');
}

function onIdentify(obj) {
    console.log("Handling identify event.");
}
function onScreen(obj) {
    console.log("Handling screen event.");
}

function onGroup(obj) {
    console.log("Handling group event.");
}

function onAlias(obj) {
    console.log("Handling alias event.");
}
// BOILER_CODE_END

%code%