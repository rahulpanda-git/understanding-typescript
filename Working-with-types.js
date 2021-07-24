/** Core data types in TypeScript
 *  Number data types - No difference between integers or floats
 *  String data types - All text values
 *  Boolean data types - true, false
*/
/** Function to add two numbers, no other data type will be allowed for function call */
function add(n1, n2) {
    return n1 + n2;
}
var n1 = 5;
var n2 = 10.4;
var result = add(n1, n2);
console.log(result);
