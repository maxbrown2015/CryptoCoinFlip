Coin Flip Simulator: My First Attempt at a Smart Contract

For use on the Ethereum Ropsten Test Blockchain

1. First, you need Node.js, an Ethereum Wallet, and the MetaMask chrome extension.

2. Install Web3.js

3. Next, install and run the EthereumTestRPC

4. In the project directory, install the lite-server package

5. Run "npm run dev" and play around!

Description:
This dApp interacts with an Ethereum Smart Contract over a local server. The
SmartContract is written in Solidity and is hosted on the Ropsten Test Blockchain.
The idea behind this contract is a casino: The creator is the 'house' and users
are players. When a user registers (a requirement to play), they receive 100
MaxCoins to begin gambling. Users can also transfer coins to others, but
they still must be registered with the smart contract.

The front end is a basic UI written designed with BootStrap and written in both
JQuery and Web3.js, Ethereum's official JavaScript API. It prevents users from
entering invalid wagers and stops users from starting another action (register,
flip) while a process is currently running. The UI displays the most recent
User's balance in MaxCoins. If an error occurs, such as the owner attempting to
play or the user playing without registering, the appropriate error message
appears in the UI. If the User wins, then their updated balance is shown as well
as a message, and vice versa for losses.

This project was my first foray into Smart Contract Development beyond Hello World.
Many thanks to
Gary Simon at CourseTro for his helpful tutorial videos (https://coursetro.com/courses/20/Developing-Ethereum-Smart-Contracts-for-Beginners),
The Ethereum Community (https://www.ethereum.org/token),
and Karl Floersch (https://karl.tech/learning-solidity-part-1-deploy-a-contract/)
