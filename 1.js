let students = ['mrWhite', 'mrOrenge', 'mrPink', 'mrBlue', 'mrBlack', 'mrEyllow', 'mrRed', 'mrBrown', 'mrGreen', 'mrMaroon']
let balls=[]
let d1 = document.getElementById('d1')
let but=document.getElementById('but')
let out = document.getElementById('out')
function f1() {
    let str = ''


    for (s in students) {
        let n = Math.floor(Math.random() * 4) + 2
        balls.push(n)
        console.log(students[s], n)
        str += students[s] + '-' + n + '<br>'
}
d1.innerHTML=str
console.log(balls)
}

f1()

function f2(){
let str=''
for (b in balls) {
    if(balls[b]==2){
        str += students[b]+ '<br>'
    }
}
out.innerHTML=str

}

but.onclick = f2

