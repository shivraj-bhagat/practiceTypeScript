let newVariable: unknown;

newVariable = 5;
newVariable = "het";

let myString: string;
if(typeof newVariable === 'string') {
    myString = newVariable; 
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code};
}

generateError("An error occurred!", 500);