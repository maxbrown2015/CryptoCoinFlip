
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  }
  else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  var MaxCoinContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "registerUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialTokensForNewUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
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
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_data",
				"type": "uint256"
			}
		],
		"name": "getRandomNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "simulateFlip",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_wager",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "uint256"
			}
		],
		"name": "flip",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"name": "startingTokens",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_user",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "userNumber",
				"type": "uint256"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "message",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "newBalance",
				"type": "uint256"
			}
		],
		"name": "Flip",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "message",
				"type": "bytes32"
			}
		],
		"name": "Message",
		"type": "event"
	}
]);

  var MaxCoin = MaxCoinContract.at("0x543224a464339b6d2118280b56b5cef77e1c3b5b");
  var currentBalance;
  var busy = false;


  $("#register-button").click(function() {
    if(busy) {
      return;
    }
    $("#result").html("");
    busy = true;
    $("#loader").show();
    MaxCoin.registerUser((error , result) => {
      if (error) {
        console.log(error);
        $("#loader").hide();
        busy = false;
      }
    });
  });

  $("#flip-button").click(function(event) {
      if (busy) {
        return;
      }
      if ($("#wager").val() <= 0) {
        $("#result").html("Please Enter a Wager Greater Than Zero");
        return;
      }
      $("#result").html("");
      busy = true;
      $("#loader").show();
      $("result").html("");
      MaxCoin.flip($("#wager").val(), event.timeStamp, (error , result) => {
        if (error) {
          console.log(error);
          $("#loader").hide();
          busy = false;
        }
      });
  });

  var flippedResult = MaxCoin.Flip({} , 'latest');
  flippedResult.watch(function (error, result) {
    $("#loader").hide();
    if(!error) {
      $("#result").html(web3.toAscii(result.args.message));
      console.log(result.args.newBalance.c);
      $("#balance").html(result.args.newBalance.c + ' ' + "MaxCoins");
    }
    busy = false;
  });

  var messageEvents = MaxCoin.Message({} , 'latest');
  messageEvents.watch(function (error, result) {
    $("#loader").hide();
    if(!error) {
    $("#result").html(web3.toAscii(result.args.message));
    }
    busy = false;
  });

  var userRegisteredEvent  = MaxCoin.UserRegistered({} , 'latest');
  userRegisteredEvent.watch(function (error, result) {
    $("#loader").hide();
    if(!error) {
    $("#balance").html(100 + ' ' + "MaxCoins");
    }
    busy = false;
  });
