const expect = require('chai').expect
var areaCalc = require('../src/areaCalc');


describe('areaCalc', ()=> {

  it('has an area of 6', function () {


    expect(areaCalc(3,4,5)).to.equal(6);


  });

  it('it does not have an area of 4', function () {


    expect(areaCalc()).to.not.equal(4);


    });
  });
