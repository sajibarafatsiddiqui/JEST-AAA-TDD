const {stringLength} = require('./stringLength')

test('raise errors',()=>
{
    //arrange
    const msg = 'my name is Sajib Arafat Siddiqui'
    //act
    const strLen = ()=>stringLength(msg);
    //action
    expect(strLen).toThrow('length is not expected length');
});
