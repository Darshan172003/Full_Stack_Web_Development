const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item); 
    return item // this will not work because forEach does not return anything
} )

// console.log(values); // undefined

const Mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMynum = [];

Mynum.forEach( (item) => {
    if (item > 3){
        newMynum.push(item);
    }
})

// console.log(newMynum); 

// filter method

const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = Num.filter( (item) => item > 5 ); // in this case we can remove the curly braces and return keyword because we are returning only one value

const newNum2 = Num.filter( (item) => {
    return item > 5;    // we can also use return keyword to return the value explicitly
} );

// console.log(newNum);
// console.log(newNum2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'Fiction' );

userBooks = books.filter((bk) => {
    return bk.edition > 2000 && bk.publish > 2000;
} )

// console.log(userBooks);


// Map method

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newNums = myNum.map((item) => item + 10);

// console.log(newNums);

// chaining of filter and map method

const MyNewNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Chaining = MyNewNum.map((item) => item * 10).map((item) => item + 1).filter((item) => item > 50);

// console.log(Chaining);

// reduce method

const Numbers = [1,2,3,4];

let sum = Numbers.reduce((acc, item) => {
    return acc + item;
}, 0); // 0 is the initial value of acc

sum = Numbers.reduce((acc, item) => acc + item, 0);

console.log(sum);

const courses = [
    { id: 1, name: 'JS', price: 100 },
    { id: 2, name: 'Ruby', price: 200 },
    { id: 3, name: 'Python', price: 300 },
    { id: 4, name: 'Java', price: 400 },
    { id: 5, name: 'CPP', price: 500 },
];

const total = courses.reduce((acc, val) => acc + val.price, 0);

console.log(total);


