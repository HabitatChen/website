var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 100] = "Down";
    Direction[Direction["Left"] = 101] = "Left";
    Direction[Direction["Right"] = 102] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);
// 如何实现enum的双向赋值如何实现
