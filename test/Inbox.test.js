const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile')

let accounts;
let inbox;
const initialMessage = 'Hi there!';

beforeEach(async () => {
  //get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //use one of those accounts to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [initialMessage] })
    .send({ from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);// assert.ok checks if value inside of it is 'ok'
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();// calling a function which does not modify any value
    assert.equal(message, initialMessage);
  });

  it('can change the message', async () =>{
    await inbox.methods.setMessage('Im Mith').send({from: accounts[0]});
                                              //creating a transaction by specifying who is going to pay for it
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Im Mith');
  });
});
