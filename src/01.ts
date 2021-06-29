// Objectives: 
// Annotate primitive types, arrays, and 'any' types
// Identify when type checking happens

export default () => {
    // ======== Part 1.1 ========
    // Goals:
    // Fix errors

    let pi: string = '3.14159';
    let tau: number = +pi * 2;

    console.log(`${tau} is ${pi} times two.`);

    // ======== Part 1.2 ========
    // Goals:
    // Fix type annotations

    let pie: string;

    pie = 'blueberry';

    console.log(`I like to eat ${pie}-flavored pie.`);

    // ======== Part 1.3 ========
    // Look how bad the code completion is w/ `any` type 😱
    // Goals:
    // Add a `boolean` type annotation

    let isReady: boolean;      // inspect the default type by hovering over `isReady`
    isReady = true;   // should be ok
    isReady = 1;      // should error
    isReady = 'true'; // should error

    console.log(`You are ${isReady ? 'ready' : 'not ready'} to learn TypeScript!`);

    // ======== Part 1.5 ========
    // Goals:
    // Add type annotations (as explicit as possible)
    // Fix errors (if applicable)

    const integer: number = 6;
    const float: number = 6.66;
    const hex: number = 0xf00d;
    const binary: number = 0b1010011010;
    const negZero: number = -0;
    const actuallyNumber: number = NaN;
    const largestNumber: number = Number.MAX_VALUE;
    const mostBiglyNumber: number = Infinity;

    const members: number[] = [
        integer,
        float,
        hex,
        binary,
        negZero,
        actuallyNumber,
        largestNumber,
        mostBiglyNumber
    ];

    members[0] = 12345;

    console.log(members);

    // ======== Part 1.6 ========
    // Goal:
    // Add type annotations (as explicit as possible)
    // Fix errors (if applicable)

    const sequence: number[] = Array.from(Array(10).keys());
    const animals: string []= ['pangolin', 'aardvark', 'echidna', 'binturong'];
    const stringsAndNumbers: (number | string) [] = [1, 'one', 2, 'two', 3, 'three'];

    // extra credit
    const allMyArrays = [sequence, animals, stringsAndNumbers];

    console.log(allMyArrays);

    // ======== Part 1.7 ========
    // Goal:
    // Add type annotations (as explicit as possible)
    // Fix errors (if applicable)

    // We want to represent an inventoryItem as a structure where
    // the first entry is the item name and the second is the quantity

    const inventoryItem: [string, number] = ['fidget wibbit', 11];

    // later we destructure it
    const [name, qty] = inventoryItem;

    const msg = addInventory(name, qty);

    console.log( msg);

    function addInventory(name: string, quantity: number): string {
        return `Added ${quantity} ${name}s to inventory.`;
    }
}
