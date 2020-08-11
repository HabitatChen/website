// 函数 一等公民
// 定义输入和输出

// 函数申明
function add(x: number, y: number, z?: number): number {
    return x + y
}

let result = add(1, 2)

// 函数表达式
// 类型推断
const add2 = (x: number, y: number): number => {
    return x + y
}

const add3: (x: number, y: number) => number = add2

// 类型推断
let str = 'str'
str = 123


