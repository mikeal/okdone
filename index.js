var i = 0
module.exports = function ok (message) {
  i += 1
  console.log('ok '+i+' '+ (message || '') )
}
module.exports.done = function done () {
  console.log('1..'+i)
}
