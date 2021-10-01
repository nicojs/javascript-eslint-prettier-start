class Person {
  /**
   * @param {string} lastname
   * @param {string} city
   */
  constructor(lastname, city = 'Veenendaal') {
    this.lastname = lastname;
    this.city = city;
  }

  /**
   * @returns {string}
   */
  greet() {
    return this.lastname + ' says hello!';
  }
}

export { Person };
