// 泛型是怎么出现的 解决什么问题 

// <尖括号里面的是占位符> 当成一个变量 使用时动态填入

function echo<T>(arg: T): T {
    return arg
}

const str: string = 'str'

const a = echo(123)


function swap1<T, U> (tuple: [T, U]): [T, U] {
    return [tuple[0], tuple[1]]
}

// 约束泛型
// 可以在泛型里面继承一个接口
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
    length: number
}

function echoWithLength< T extends IWithLength >(arg: T): T {
    console.log(arg.length)
    return arg
}

// 泛型在类中的应用

class Queue<T> {
    private data: T[] = [];
    push(item: T) {
        return this.data.push(item)
    }

    pop(): T | undefined {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)

const b = queue.pop()

console.log(b);

// interface可以接受传参 
interface KeyPair<T = {} , U = undefined> {
    key: T,
    value: U
}

let kp1: KeyPair<number, string> = {
    key: 123,
    value: 'str',
}

// interface 描述函数的type
function plus(a: number, b: number): number {
    return a + b
}

interface IPlus<T> {
    (a: T, b: T): T
}

const c: IPlus<number> = plus



 



export {}