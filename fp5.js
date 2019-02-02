// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.

const friends = ['Ron', 'John'];

// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name

const updatedFriends = [...friends, 'Robin'];

// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.

const friendNameLengths = updatedFriends.map((friend) => friend.length)

// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.

const shorterNamedFriendsWithMathMax = updatedFriends.filter((friend) => { return friend.length < Math.max(...friendNameLengths)})

const shorterNamedFriendsPureFp = updatedFriends.filter((friend) => { return friend.length < friendNameLengths.reduce((a, b) => { return a > b ? a : b; }) })


// 5. Print each variable to the console.

console.log(friends, updatedFriends, friendNameLengths, shorterNamedFriendsWithMathMax, shorterNamedFriendsPureFp)

// Solution can be seen at: 
// https://jsbin.com/nevonet/1/edit?js,console
