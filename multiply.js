var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5735512057');
});
client.on('data', function(data) {
	console.log('DATA: ' + data);

			 client.write('13');
			 client.destroy();
	

});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
