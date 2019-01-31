var i=1
var math,english,science,social
var avg

var gpacal = function() {

	console.log('Program calculate')
	let stdin = process.openStdin()
	console.log('Enter number grade of Math : ')
	stdin.addListener("data",(value) => {
		
		if (i === 1){
			math = value
			console.log('Enter number grade of English :')}

		else if (i === 2){
			english = value
			console.log('Enter number grade of Science :')}

		else if (i === 3){
			science = value
			console.log('Enter number grade of Scial :')}

		else {
				social = value
				stdin.destroy()
			
				avg = ( ((math*1.00)+(english*1.00)+(social*1.00)+(science*1.00) )/4)
			
			
				console.log('Your GPA = ' + avg )
			}	
	i++	
	})
}

module.exports.gpacal = gpacal;