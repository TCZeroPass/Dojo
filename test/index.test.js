import  Calculator  from '../bin/index';



describe('Calculator Tests for Dojo nr.1', () => {
  let calc1;
  
  beforeEach(() => {
    calc1 = new Calculator();
  });

  afterEach(() => {
    calc1 = null;
  });
  
  it('When passing null it returns "0"', () => {
    let passingZero = calc1.add(null);
    expect(passingZero).toBe("0");
  });

  it('When passing "" empy string it returns "0"', () => {
    let passingEmpty = calc1.add("");
    expect(passingEmpty).toBe("0");
  });

  it('Passing integer numbers 1,2,3 and getting result 6', () => {
    let passingInteger = calc1.add("1,2,3");
    expect(passingInteger).toBe(6);
  });

  it('Passing mixed numbers "1,2.2,3.3,5" and getting result 11,5', () => {
    let passingInteger = calc1.add("1,2.2,3.3,5");
    expect(passingInteger).toBe(11.5);
  });

});