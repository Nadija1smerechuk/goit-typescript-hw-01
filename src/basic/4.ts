function showMessage(message : string) : void{
    console.log(message);
}
showMessage ('Hello, world!');



function calc(num1 : number, num2: number) {
    return num1 + num2;
}
calc(5, 15);

function customError() : never {
    throw new Error('Error');
}
customError()