// BEGIN
export const getMutualFriends = (personA, personB) => {
  const acquaintancesA = personA.getFriends();
  const acquaintancesB = personB.getFriends();
  
  return acquaintancesA.filter(acquaintanceA => 
    acquaintancesB.some(acquaintanceB => acquaintanceB.id === acquaintanceA.id)
  );
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});