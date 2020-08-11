// 类型别名 type aliases

type PlusType = (x: number, y: number) => number

function sum(x: number, y: number): number {
    return x + y
}

const sum2: PlusType = sum

export {}

// type assertion 类型断言
function getLength(input: string | number): number {
    // 把input当成string
    const str = input as String
    if (str.length) {
        return str.length
    } else {
        const number = input as Number
        return number.toString().length
    }

    // 简便写法
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}
