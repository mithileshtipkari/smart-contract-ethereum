const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'captain spread subway garment major stairs anger elbow gun syrup slender frost',
  'http://rinkeby.infura.io/v3/b127666035e74bf2b7660531fa2829ad'
);
const web3 = new Web3(provider);
// console.log(web3);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data : bytecode, arguments: ['hi']})
  .send({ gas : '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};
deploy();
