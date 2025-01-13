var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function findLongestName(friends) {
    var longestName = friends[0]; 

    for (var i = 1; i < friends.length; i++) {
        if (friends[i].length > longestName.length) {
            longestName = friends[i];
        }
    }
    
    return longestName;
}

console.log("The friend with the longest name is:", findLongestName(friends));
