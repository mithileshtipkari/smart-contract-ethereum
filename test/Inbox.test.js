const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


class Car{
  park(){
    return 'stopped';
  }

  drive(){
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  console.log('in beforeEach')
  car = new Car();
});

describe('Car', () =>{
  console.log('in describe')
  it('can park', () => {
    console.log('in it1')
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () =>{
    console.log('in it2')
    assert.equal(car.drive(), 'vroom');
  });
});
