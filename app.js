console.log('Hello, Demo!')

var moment = require('moment');
var date = moment().format('LL');
console.log(date);

const jwt = require('jsonwebtoken');
require('dotenv').config();

let duration = moment.deprecationHandler(180, 'days').unix();
const secret =' -----BEGIN RSA PRIVATE KEY-----MIIBOQIBAAJBAJjHqtJHB748Wvv3LxULWtPS0wk9BpMKIpjmCTt0m4cjVJZJtNMnwXJc3PunOpso0U6pOHyRzl4vyH3amvY2Rm0CAwEAAQJAIphT3fmnjzQrhhKa3rELiBudHeJrsrAA1Y6BWK026oqCn/j6BWoBu9hXJJbfrZdO4gaAd0qz3RMAhJAdjSyoAQIhAOrnZLoS3mMfovn0Nmorxl3/V0v4GNcDX/LLKtmV73BBAiEApoAvvnh0TYYHQZ2f8DzBC4G8snSMGDQwnjoyaPYcyy0CIG/ekSbYk5ZrW6dkOYHopQjg8McaOWI0lj4/qYGEGUrBAiB7fyTqoCmTvs/vCV0yMb32LPqrWur2oO9WzU/KrpHY2QIgckuD5ieqhWNx2SymCzRQRQ1mQ+fhoS0/9y6UDUyQI18=-----END RSA PRIVATE KEY-----';

let valoresperado;

try {
	// Generate payload
	valoresperado = jwt.sign({ 
		iss: 'jwt-tutorial', // Issuer (who created and signed this token)
		sub: 'USER_ID', // Subject (whom the token refers to)
		scope:'[principal-products:read, principal-portafolios:read]',
		exp: duration, // Token expiry date
		roles: ['student']
	}, secret);

	console.log("-- Generated JWT --");
	console.log(+ '  sdsdsdsd' + valoresperado + '  sdsdsdsd');
} catch (errorOnPayload) {
	console.log("\nFailed to generate payload! An error happened :", errorOnPayload);
}

try {
	let decoded = jwt.decode(valoresperado, { complete: true });

	console.log("\n-- Decoded JWT --");
	console.log("Header :", decoded.header);
	console.log("Payload :", decoded.payload);
	console.log("Signature :", decoded.signature); // Header + Payload generate signature
} catch (errorOnDecode) {
	console.log("\nFailed to decode JWT! An error occurred :", errorOnDecode);
}