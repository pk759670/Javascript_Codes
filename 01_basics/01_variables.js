const accountId=2354
let accountEmail="ronny@yahoo.com"
var accountPassword="54321"
accountcity="Champaran"
let accountState

// accountId=7865 // not allowed if its declare as constant

accountEmail="jony@google.com"
accountPassword="09785"
accountcity="Mathura"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])