import web3 from './web3';

const address = '0x33db733d716b970033d1402f2544ec30b738318c'; // THE CONTRACT ADDRESS
const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_startPrice",
				"type": "uint256"
			},
			{
				"name": "_description",
				"type": "string"
			}
		],
		"name": "createAuction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctions",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "returnAllAuctions",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]; // THE ABI

const instance = new web3.eth.Contract(abi, address);

export default instance;
