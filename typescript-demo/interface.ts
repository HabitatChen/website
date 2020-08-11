// 如何定义对象类型 duck typing 鸭子类型
// 1.对对象的形状进行描述
// 2.对类进行抽象

// ?: 表示可选属性
// readonly 和 const 的区别 
// => readonly是用在属性上 而const是用在变量上的

interface IPerson {
    readonly id: number
    name: string
    age?: number
}

let ck: IPerson = {
    id: 18,
    name: 'ck',
    age: 18
}




