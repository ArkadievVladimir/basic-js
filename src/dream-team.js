const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  members = members || false;
  if (members[0] !== undefined ) {
    members = members.filter(item => typeof(item) === 'string').map(item => item = item.trim());
    members = members.map( item => item[0].toUpperCase() ).sort().join('');
    return members;
  } else {
    return false;
  }
};