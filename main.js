//import { exMain } from "./exclude/exampleAss2.js"

/**
 * Main function which calls the application.
 * Converts a number from one system to another.
 * Only binary → decimal is implemented for now.
 * @param {string} inputNumber - number that is being converted
 * @param {number} inputNumberSystem - system number is being converted from
 * @param {number} outputNumberSystem - system number is being converted into
 * @returns {string} containing number converted to output system
 */

// Core logic is based on two loops: validation and conversion
// Validation loop:
// for(let i = 0; i <numString.length; i++){
//     let digit = Number(numString[i]);
//     if(digit !== 1 && digit !==0){
//         return "Not a binary";
//     }
// }
// Conversion loop:
// for(let i = 0; i<numString.length; i++){
//     let power = numString.length - 1 - i;
//     let stringToNumber = Number(numString[i]);
//     converted += stringToNumber*(2**power);
// }

export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    // Only binary → decimal is allowed 
    if (inputNumberSystem === 2 && outputNumberSystem === 10) {
        const numString = inputNumber.toString();
        let converted = 0;

        for (let i = 0; i < numString.length; i++) {
            const digit = Number(numString[i]);

            if (digit !== 0 && digit !== 1) {
                return "Not a binary";
            }

            const power = numString.length - 1 - i;
            converted += digit * (2 ** power);
        }

        return converted.toString();
    }

    // For other systems, just return input as string
    return inputNumber.toString();
}

/**
 * Returns all input number systems that your application can convert from.
 * @returns {Array<number>}
 */
export function permittedInputSystems() {
    return [10, 2];
}

/**
 * Returns all output number systems that your application can convert to.
 * @returns {Array<number>}
 */
export function permittedOutputSystems() {
    return [10, 2];
}
