const expect = require('chai').expect
var pokeSort = require('../src/pokeSort');

let pokeArray = [{
  id: 4,
  name: 'charmander',
  weight: 12.3
}, {
  id: 1,
  name: 'bulbasaur',
  weight: 22.4
}, {
  id: 7,
  name: 'squirtle',
  weight: 17.9
}, {
  id: 144,
  name: 'articuno',
  weight: 60.2
}]

describe('pokeSort', ()=> {

  it('if pokeArray is empty', ()=> {


    expect(pokeSort(pokeArray = [])).to.deep.equal([]);


  });

  it("is not empty", function () {

    expect(pokeArray.length>0).to.equal(false);


    });
  });
