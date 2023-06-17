// Creates an array with all digits, letters and symbols that can be used.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const symbols = ['!', '@', '#', '$', '%', '&', '*', '?']
//Creates an array that contains previous arrays
const all = [numbers, lower, upper, symbols]

//Creates funct that generates a password

function generatePassword() {
    let password = [];
    //For loop creates a 50 digit array by looping 50 times and using random number generators to pick a digit/letter/symbol from earlier arrays
    for (let i = 0; i < 50; i++) {
        let locate1 = Math.floor(Math.random() * 4);
        let locate2;
        if (locate1 === 0) {
            locate2 = Math.floor(Math.random() * 10);
        } else if (locate1 === 1 || locate1 === 2) {
            locate2 = Math.floor(Math.random() * 26)
        } else if (locate1 === 3) {
            locate2 = Math.floor(Math.random() * 8);
        }
        //Pushes chosen digit/letter/symbol into password array
        password.push(all[locate1][locate2]);
    }
    //returns a joined password
    return password.join('')
}

//logs 5 passwords for personal choice

console.log(generatePassword())
console.log(generatePassword())
console.log(generatePassword())
console.log(generatePassword())
console.log(generatePassword())
