let stone = '1';
let scissors = '2';
let paper = '3';
let score1 = 0;
let score2 = 0; 

console.log('Камінь: ', stone);
console.log('Ножиці: ', scissors);
console.log('Папір: ', paper);

while (true) {
    user1 = prompt('Enter the number from 1 to 3. 1 - stone, 2 - scissors, 3 - paper');
    user2 = prompt('Enter the number from 1 to 3. 1 - stone, 2 - scissors, 3 - paper');
    if ((user1 === '1' && user2 === '2') || (user1 === '2' && user2 === '3') || (user1 === '3' && user2 === '1')) {
        score1++
        console.log('user1:', score1);
        alert("Yeah! You won! user1")
    } else if  ((user1 === '1' && user2 === '3') || (user1 === '3' && user2 === '2') || (user1 === '2' && user2 === '1')) {
        score2++
        console.log('user2:', score2);
        alert("Yeah! You won! user2")
    } else {
        alert("The friendship won!")
    }
    if (score1 === 3) {
        console.log('game over, user1 wins!')
        break;
    } else if (score2 === 3) {
        console.log('game over, user2 wins!')
        break;
    }
}
    
        
