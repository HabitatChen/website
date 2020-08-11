// 指定name是字符串的类型 只会做静态检查 只会在编译的时候报错
const hello = (name: string) => {
    return `hello ${ name }`
}

hello('ck')