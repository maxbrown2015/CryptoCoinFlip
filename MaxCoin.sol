pragma solidity ^0.4.0;

contract owned {
    address public owner;

    function owned() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
}
/*
MaxCoin extends owned. This is so the creator of the contract acts as the "House"
for allowance and gambling purposes.
*/
contract MaxCoin is owned {
    string public name;
    string public symbol;
    uint8 public decimals = 2;
    uint256 public totalSupply;
    uint256 public initialTokensForNewUser = 1000;
    uint256 numberOfUsers;


    //This creates a HashTable of Addresses mapped to balances
    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;
    //mapping to check if players already exist
    mapping (address => bool ) public users;

    //notifies all nodes of a transfer or burn
    event Transfer(address from , address to, uint256 value);
    event UserRegistered(address _user, uint256 userNumber);
    event Flip(bytes32 message, uint256 newBalance);
    event Message(bytes32 message);

    /*
    At initialization, all MaxCoins are sent to the creator
    */
    function MaxCoin(uint256 initialSupply, uint256 startingTokens) {
        totalSupply = initialSupply * 10 ** decimals;
        balanceOf[owner] = totalSupply;
        users[owner] = true;
        initialTokensForNewUser = startingTokens;
        name = "MaxCoin";
        symbol = "MXC$";
        numberOfUsers = 0;
    }
    /*
    transfer method to send MaxCoins to another address. Users must be
    registered to receive coins
    */
    function transfer(address _to, uint256 _amount)  {
        if (!users[_to]) {
            emit Message("Recipient is not registered");
        }
        checkBalancesForTransfer(msg.sender , _to , _amount);
        //exchange MaxCoins between accounts
        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;

        emit Transfer(msg.sender , _to , _amount);
    }
    /*
    transfer method used for receiving or sending tokens to the owner during
    gambling
    */
    function transfer(address _from , address _to , uint256 _amount) {
        if (!users[_to]) {
            emit Message("Recipient is not registered");
        }

        checkBalancesForTransfer(_from , _to , _amount);
        balanceOf[_from] -= _amount;
        balanceOf[_to] += _amount;
        emit Transfer(msg.sender , _to , _amount);
    }
    /*
    Helper function to ensure balances are sufficient.
    */
    function checkBalancesForTransfer(address _from , address _to, uint _amount) internal {
        //Prevent tranfer to 0x0 address.
        require(_to != 0x0);
        //Check if sender has enough coins;
        require(balanceOf[_from] >= _amount);
        //Check for overflow
        require(balanceOf[_to] + _amount > balanceOf[_to]);
    }

    /*
    Method registers a user into the player mapping, which allows them to gamble.
    New users receive a certain amount of MaxCoins to begin playing.
    */
    function registerUser(){
        if(msg.sender == owner) {
            emit Message("Owner cannot register");
            return;

        }
        if (users[msg.sender]) {
            emit Message("User already registered");
            return;
        }

        users[msg.sender] = true;
        transfer(owner, msg.sender, initialTokensForNewUser);
        numberOfUsers++;
        emit UserRegistered(msg.sender, numberOfUsers);
    }


    /*
    Simulates a fair coinflip. Takes in some pseudo-random data and decides the
    outcome based on that input
    */
    function flip(uint256 _wager, uint256 _data) returns (uint256) {
        if (users[msg.sender] && msg.sender != owner) {
            checkBalancesForTransfer(owner , msg.sender, _wager);
            checkBalancesForTransfer(msg.sender , owner, _wager);
            uint256 randomNumber = getRandomNumber(_data);
            bool result = simulateFlip(randomNumber);
            if (result) {
                transfer(owner , msg.sender, _wager);
                emit Flip("You won!" , balanceOf[msg.sender]);

            }
            else {
                transfer(msg.sender, owner, _wager);
                emit Flip("You lost!" , balanceOf[msg.sender] );
            }
        }
        else {
            if (msg.sender == owner) {
                emit Message("Owner cannot play itself");
            }
            else {
                emit Message("User has not been registered");
            }
        }
    }

    //More randomization/complexity needed
    function getRandomNumber(uint256 _data) returns (uint256) {
        return _data;
    }

    function simulateFlip(uint256 _number) returns (bool) {
        return _number % 2 == 0;
    }

    function kill()  onlyOwner {
        selfdestruct(owner);
    }

    //incase someone tries to send ether to the contact
    function () {
        revert();
    }
     
}
