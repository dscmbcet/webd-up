arr=[1,2,3,4,5]
// .map()

newArr = new Array();
newArr = arr.map(  (x) => x*2  ) 
console.log(newArr)



//.filter()

names= ["nihal" , "kevin", "babu" , " navaneeth", "inky"]
latestArr = new Array();
latestArr = names.filter((x)=> { return x.length < 5 })
console.log(latestArr);