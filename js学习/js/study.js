function demo(param) {
    var message = "hi";
    globalMessage = "hello";
    console.log(message);
    console.log("globalMessage："+globalMessage);
}

function print(obj) {
    console.log(obj)
}


demo();
console.log(globalMessage);

console.log(typeof demo);

console.log(typeof null);  //null是一个空的对象，object

var test = undefined;   //undefined是Undefined类型中的唯一一个值

console.log(test == undefined);

console.log(typeof hello);

console.log(undefined == null); // undefined值派生自null，返回true

console.log(Boolean(undefined));

console.log(Number.MAX_VALUE);

console.log(isFinite(Number.MAX_VALUE));

console.log(true == 1);

print(Number("hello"));
print(Number("123"));
print(Number("-123.2"));

print(Number(true));
print(Number(false));


print(parseInt("123blue"));
print(parseInt("123.2"));

print(parseInt("0x123"));  //16进制数：291
print(parseInt("070"));  //ECMAScript 3会把这个当做8进制，而ECMAScript 5会把这个当做10进制
print(parseInt("070",8));

var test = "hello world";
print(typeof test);
print(test.length);
for (var i = 0; i < test.length; i++){
    print(test[i]);
}

for ( i of test){
    print(i)
}

var language = "hello";
language += " zhangsy";
print(language);
print(String("123"));

print(Boolean(NaN));

print(66/12);

print(Number("122bule"));
print("122" < 233);

print("123" == 123);    // 不全等 true， 比较之前会先进行类型转换
print("123" === 123);   //全等 false，不进行类型转换，直接比较

var score = 75;
switch (true){          //这个地方的这个写法，很奇怪啊
    case score < 60:
        print("不及格");
        break;
    case score === 60:
        print("刚刚及格");
        break;
    case score > 70:
        print("中等");
        break;
    default:
        print(score);
        print("未知登记");
}

function say(name, ...arguments) {
    print("hello,"+name);
    for (var i = 0; i < arguments.length; i++){
        print("arguments["+i+"]:"+arguments[i]);
    }
}

say("zhangsy", "xlcheng");

