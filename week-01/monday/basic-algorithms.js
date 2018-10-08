console.log('Im ready!!!!');

//Create a variable hacker1 with the driver's name
const hacker1 = 'Axel';

// Print "The driver's name is XXXX"
console.log('The drivers name is ' + hacker1);

// Create a variable hacker2 and ask the user for the navigator's name
let hacker2 = 'Guto';
//console.log(hacker2);

//Print "The navigator's name is YYYY"
console.log('The navigators name is ' + hacker2);

//Depending on which name is longer, print:
//The Driver has the longest name, it has XX characters or
//Yo, navigator got the longest name, it has XX characters or
//wow, you both got equally long names, XX characters!!
//Loops
if (hacker1.length === hacker2.length) {
  console.log('wow, you both got equally long names,' + hacker1.length + ' characters!');
} else if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length +  ' characters');
} else {
  console.log('Yo, navigator got the longest name, it has ' +  hacker2.length +  ' characters');
}


//Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
let capitalSpace = hacker1.toUpperCase().split('').join(' ');
console.log(capitalSpace);

//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

let navReverse = hacker1.split('').reverse().join('');
console.log(navReverse);

// Depending on the lexicographic order of the strings, print:
if (hacker1.toUpperCase() === hacker2.toUpperCase()) {
  console.log('What?! You both got the same name?')
} else if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log('The drivers name goes first');
} else {
  console.log('Yo, the navigator goes first definitely');
}

// Check if palindrome
let maybePalindrome = 'ax, a';

function checkPalindrome (string) {
  let s1 = "";
  for (let i = 0; i < string.length; i++) {
    const character = string[i].toUpperCase();
    if ('A' <= character && 'Z' <= 'Z') {
      s1 += string[i];
    }
  }
   return s1 === s1.split('').reverse().join('') ? 'It is a palindrome! :)' : 'It is not a palindrome..  :(';
}

console.log(checkPalindrome(maybePalindrome));



// Last objective

// const paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lorem leo, vehicula at vestibulum eget, malesuada nec ipsum. Fusce a nisi lobortis, vestibulum orci eu, mollis justo. In et mollis sem. Donec bibendum ex sed lectus efficitur, eget semper eros posuere. Morbi arcu risus, ultrices sit amet suscipit a, vestibulum at urna. Donec interdum fermentum aliquet. Ut tempor odio nec tincidunt consectetur. Fusce molestie orci in mi blandit efficitur. Curabitur mauris felis, aliquet vitae lorem non, pretium pellentesque arcu. Mauris interdum risus nulla, semper tristique elit eleifend eget. Cras auctor neque sit amet leo vulputate, scelerisque sagittis nisi molestie. Proin eu sem elementum, lacinia est in, sagittis nisl. Nulla pretium pellentesque rhoncus. Donec a volutpat mauris. Suspendisse sodales est eleifend orci elementum, non convallis urna ultrices. Morbi id ultricies nisl, non hendrerit quam. Ut in orci commodo, consequat metus in, sagittis nunc. Sed vitae purus non ipsum ultricies dignissim. Quisque molestie urna eros, id sollicitudin risus sollicitudin porta. Aenean placerat felis purus, quis lacinia nibh ultrices quis. In in luctus purus. Quisque porttitor leo sed neque mattis placerat. Nullam mollis, tortor quis tempor porttitor, mauris arcu tincidunt purus, quis sollicitudin magna urna volutpat leo. Sed pharetra, tellus vitae tristique commodo, urna nulla sodales lacus, ullamcorper pulvinar risus libero vitae turpis. Nulla condimentum molestie sollicitudin. Vestibulum mattis, nisi vitae aliquam vestibulum, mi lacus hendrerit est, nec consequat elit turpis et mauris. Fusce magna nibh, mollis eget gravida in, efficitur dignissim metus. Sed fringilla magna vel tortor mollis mollis. Maecenas vestibulum purus a interdum maximus.";

// console.log(paragraphs);