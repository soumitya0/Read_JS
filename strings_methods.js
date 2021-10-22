// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

/*............................................STRING METHODS */
var str = "soumitya chauhan";

//...............................................Length
console.log(str.length);

//..............................................slice() :

//slice : extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// If a parameter is negative, the position is counted from the end of the string.
console.log(str.slice(0, 5));
console.log(str.slice(-10, -2));

// ............................................substring()
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.
console.log(str.substring(0, 2));

// .................................................substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
console.log(str.substr(2, 8));

// ....................................................replace()
// The replace() method replaces a specified value with another value in a string:
//replace() replaces only the first match
// replace() method is case sensitive
console.log(str.replace("soumitya", "king"));
console.log(str.replace("a", "llll"));
console.log(str.replace("SOUMITYA", "llll"));

// ..........................................................................Upper and Lower Case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// ......................................................concat()
console.log(str.concat(" hello world"));

// .............................................trim();
// removes whitespace from both sides of a string
let text = " soumitya chauhan    ";
console.log(text.trim());

// ...........................................................padStart and padEnd
let num = "5";
console.log(num.padEnd(5, 0));
console.log(num.padEnd(5, 44));
console.log(num.padEnd(5, 15));

console.log(num.padStart(5, 0));
console.log(num.padStart(5, 20));
console.log(num.padStart(5, 44));

//.................................charAt()
// charAt() method returns the character at a specified index (position) in a string:
console.log(str.charAt(5));

// ..............................................charCodeAt()
// returns the unicode of the character at a specified index in a string.
// The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(str.charCodeAt(5));

// .......................................fromCharCode()
console.log(".......................................fromCharCode()");
// Convert a Unicode number into a character:
console.log(String.fromCharCode(72));
console.log(String.fromCharCode(65));

console.log(String.fromCharCode(72, 69, 76, 76, 79));

/*

        Property Access

*/
console.log(".......................................Property Access");
console.log(str[5]);
/*/Property  access might be a little unpredictable
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only
/*/
str[0] = "A"; // Gives no error, but does not work
console.log(str[0]); //s

/*
                CONVERT SRRING TO ARRAY

*/
console.log(str.split(""));
console.log(str.split(" "));

/*  
             JavaScript String Search
            
                String.indexOf()
                String.lastIndexOf()
                String.startsWith()
                String.endsWith()

 */

//...............................indexOf()
// ..............................indexOf(searchValue, StartSearchingfromIndex)

//indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
console.log(str.indexOf("a"));
console.log(str.indexOf("soumitya"));
console.log(str.indexOf("a", 9));

// .......................................lastIndexOf()
// ..............................lastIndexOf(searchValue, StartSearchingfromIndex)

// lastIndexOf() method returns the index of the last occurrence of a specified text in a string
console.log(str.lastIndexOf("a"));
console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("h", 5));

//              Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(str.indexOf("k"));
console.log(str.lastIndexOf("q"));

// ..................................................String.search()
console.log(str.search("a"));

/*      Did You Notice?

        The two methods, indexOf() and search(), are equal?
        .The search() method cannot take a second start position argument.
        .The indexOf() method cannot take powerful search values (regular expressions).

*/

// .........................................................String.includes()
// string.includes(searchvalue, start)

//  includes() method returns true if a string contains a specified value
console.log(str.includes("a"));
console.log(str.includes("it"));
console.log(str.includes("ha", 8));
console.log(str.includes("chauhan"));
console.log(str.includes("k"));

// ...........................................................startsWith()
// string.startsWith(searchvalue, start)

// startsWith() method returns true if a string begins with a specified value, otherwise false
console.log("................................startsWith()");
console.log(str.startsWith("so"));
console.log(str.startsWith("it"));
console.log(str.startsWith("c"));
console.log(str.startsWith("chau"));
console.log(str.startsWith("sou"));
console.log(str.startsWith("soumitya"));

// ...........................................................endsWith()
// string.endsWith(searchvalue, start)

// endsWith() method returns true if a string ends with a specified value
console.log("................................endsWith()");
console.log(str.endsWith("a"));
console.log(str.endsWith("n"));
console.log(str.endsWith("an"));
console.log(str.endsWith("han"));
console.log(str.endsWith("chauhan"));
