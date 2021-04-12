var newVariable;
newVariable = 5;
newVariable = "het";
var myString;
if (typeof newVariable === 'string') {
    myString = newVariable;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
