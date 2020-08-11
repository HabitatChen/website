// 布尔类型
let isDone: boolean = true

// number类型
let age: number = 123
let binaryNumber: number = 0b1111

// string 类型
let firstName: string = 'ck'

// undefined || null 是所有类型的自类型
let u: undefined = undefined
let n: null = null

// 优点问题
let num: number = undefined

// 不确定类型

// any 类型 允许赋值给任意类型 避免使用any
let notSure: any = 4
notSure = 'may be it is a string'
notSure.ck = 'ck'

// 联合类型 unitypes
let numberOrString: number | string = 234
// 则会报错
numberOrString = true

// 复杂类型
let arrOfNumbers: (number | string)[] = [1, 2, 3, 4, '5']
let arrOfNumberss: Array<number | string> = [1, 2, 3, 4, '5']
