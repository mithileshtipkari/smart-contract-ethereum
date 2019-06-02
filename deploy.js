const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

console.log('in deploy script');
console.log('-----------------------------------------------------------------------------');
const provider = new HDWalletProvider(
  'captain spread subway garment major stairs anger elbow gun syrup slender frost',
  'https://rinkeby.infura.io/v3/b127666035e74bf2b7660531fa2829ad'
);
console.log('provider-\n',provider);
console.log('-----------------------------------------------------------------------------');
console.log('address fetched--', provider.addresses[0]);
accFromProvider = provider.addresses[0];
const web3 = new Web3(provider);
// console.log(web3);
// web3.setProvider(provider);
const deploy = async () =>{
  console.log('in deploy');
  console.log('-----------------------------------------------------------------------------');
  const accounts = await web3.eth.getAccounts();
  console.log('acc-', accounts);
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface));
  result.deploy({ data : '0x' + bytecode, arguments: ['hi im mith n im cool']})
  .send({ from: accounts[0], gas: '1000000' })
  .on('receipt', (receipt) => {
   console.log('addadd', receipt.contractAddress) // contains the new contract address
  })
  .catch((err) => {
    console.log('err in deploying-\n', err);
  });

  console.log('ok');
  // console.log('Contract deployed to', result);
};
deploy();
