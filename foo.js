//accessable out side module
function foo(){
    console.log("foo")
}

//not accessable outside module
function bar (){
    console.log("bar")

}
module.exports=  foo;
// foo.js
//export foo = 10;
