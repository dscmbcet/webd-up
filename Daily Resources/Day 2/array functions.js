arr=[1,2,3,4,5]
// .map()
names= ["nihal" , "kevin", "babu" , " navaneeth", "inky"]
newArr = new Array();
newArr = names.map(  (x) => x + " is a good boy"  ) 
console.log(newArr)



//.filter()

names= ["nihal" , "kevin", "babu" , " navaneeth", "inky"]
latestArr = new Array();
latestArr = names.filter((x)=> { return x.length < 5 })
console.log(latestArr);