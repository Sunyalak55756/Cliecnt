var i=1
var disc,price
var total

var discountcal = function() {

	console.log('Program calculate discount')
	let stdin = process.openStdin()
	console.log('Enter price : ')
	stdin.addListener("data",(value) => {
		
		if (i === 1){
			price = value
			console.log('Enter discount :')}

		else {
				disc = value
				stdin.destroy()
			
				total = ((price*disc)/100.00)
			
				console.log('Discount = ' + total )
				console.log('You have to pay = ' + (price-total) )
			}	
	i++	
	})
}

module.exports.discountcal = discountcal;