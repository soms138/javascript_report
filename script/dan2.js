// // HTML 안에 새로운 ul > li 만들기
let danNewLi = document.createElement('ul');
const contents = document.querySelector('.dan_box .contents');
let a = 2
danNewLi.innerHTML = `<li>${a}X1=${a*1}</li>`
danNewLi.innerHTML += `<li>${a}X2=${a*2}</li>`
danNewLi.innerHTML += `<li>${a}X3=${a*3}</li>`
danNewLi.innerHTML += `<li>${a}X4=${a*4}</li>`
danNewLi.innerHTML += `<li>${a}X5=${a*5}</li>`
danNewLi.innerHTML += `<li>${a}X6=${a*6}</li>`
danNewLi.innerHTML += `<li>${a}X7=${a*7}</li>`
danNewLi.innerHTML += `<li>${a}X8=${a*8}</li>`
danNewLi.innerHTML += `<li>${a}X9=${a*9}</li>`
contents.appendChild(danNewLi)

// HTML 안에 있는 li에 내용 넣기1
// const contents = document.querySelectorAll('.dan_box .contents ul li');
// let a = 2
// contents[0].innerHTML = `${a}X1=${a*1}`
// contents[1].innerHTML = `${a}X2=${a*2}`
// contents[2].innerHTML = `${a}X3=${a*3}`
// contents[3].innerHTML = `${a}X4=${a*4}`
// contents[4].innerHTML = `${a}X5=${a*5}`
// contents[5].innerHTML = `${a}X6=${a*6}`
// contents[6].innerHTML = `${a}X7=${a*7}`
// contents[7].innerHTML = `${a}X8=${a*8}`
// contents[8].innerHTML = `${a}X9=${a*9}`