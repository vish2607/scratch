export default class Person<T,V> {
    constructor(public firstName: string, public lastName: string, public age?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let person = new Person<string, number>('Vishal', 'Verma', 29);

console.log(person);
