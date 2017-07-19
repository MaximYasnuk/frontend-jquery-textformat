'use strict';
var messageField = $('.message-form > .message-field');
var messageFormatted = $('main > .message-formatted');
var messageForm = $('main > .message-form');

function getFormattedText() {
    messageFormatted.text(
    messageField.val()
        .toLowerCase()
        .trim()
        .replace(/\s+/g,' ')
    )
}
function reset() {
    messageFormatted.text('');
}

messageField.on('keyup', getFormattedText);
messageForm.on('reset', reset);
