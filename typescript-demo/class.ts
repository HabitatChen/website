// 类class
// 类(Class)：定义了一切事物的抽象特点
// 对象(Object): 类的实例
// 面向对象(OOP)三大特性：封装 多态 继承
// 类的修饰符 public private protected
// 类的静态属性和静态和方法，和实例化无关 可以不需要实例化也能调用

class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }

    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.bark())


// TODO extends 和 implements 的异同点

// 使用implements实现功能提取和抽象 如class A implements IPerson {} 那么意味着 A 里面必须有Iperson的所有属性和方法

interface Radio {
    name: string
    switchRadio(trigger: boolean): void 
}

// 使用extends关键字 可以继承被继承对象的所有的属性
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void 
}

class Car implements Radio {
    name = 'fous'
    switchRadio() {

    }
}

// 类不能extends接口 但是可以implement
// 类只能继承类 接口只能继承接口 但是类可以implement
class CellPhone implements RadioWithBattery {
    name: string = 'iphone'
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}