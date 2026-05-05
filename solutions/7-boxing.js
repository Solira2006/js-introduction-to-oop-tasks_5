// BEGIN
export default function magic(...numbers) {
  const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
  
  const innerFunc = (...moreNumbers) => {
    const additionalSum = moreNumbers.reduce((accumulator, current) => accumulator + current, 0);
    return magic(total + additionalSum);
  };
  
  innerFunc.valueOf = () => total;
  
  return innerFunc;
}
// END