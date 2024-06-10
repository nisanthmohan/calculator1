function display(num){
    root.value+=num

}
function empty(){
    root.value=""
}
function operations(){
    let current=root.value
    let result=eval(current)
    root.value=current+"="+result
}
function backspace(){
    let clear=root.value.slice(0,-1)
    root.value=clear
}