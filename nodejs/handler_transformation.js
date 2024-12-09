// Define the transformation functions

// Source: Github
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