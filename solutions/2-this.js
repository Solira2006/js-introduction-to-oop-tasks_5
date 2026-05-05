// BEGIN
export default function make(num = 0, den = 1) {
  return {
    numer: num,
    denom: den,
    
    setNumer(val) {
      this.numer = val;
    },
    
    setDenom(val) {
      this.denom = val;
    },
    
    getNumer() {
      return this.numer;
    },
    
    getDenom() {
      return this.denom;
    },
    
    toString() {
      return `${this.numer}/${this.denom}`;
    },
    
    add(fraction) {
      const first_num = this.numer;
      const first_den = this.denom;
      const second_num = fraction.getNumer();
      const second_den = fraction.getDenom();
      
      const result_num = first_num * second_den + first_den * second_num;
      const result_den = first_den * second_den;
      
      return make(result_num, result_den);
    }
  };
}
// END