/*var open = false;

function Drop(n) {
	var i;
	if (open == false) {
		for (i = n; i < 4; i++) {
			Drp(i)
		}
		open = true
	} else if (open == true) {
		for (i = n; i < 4; i++) {
			Cls(i)
		}
		open = false
	}
}

function Drp(n) {
	var elem = document.getElementsByClassName("menu-con")[n];
	var pos = -1 * window.innerHeight - n * 100;
	var id = setInterval(frame, 2);

	function frame() {
		if (pos >= -10) {
			clearInterval(id);
			elem.style.top = 0 + 'px';
		} else {
			pos += 10;
			elem.style.top = pos + 'px';
		}
	}
}

function Cls(n) {
	var elems = document.getElementsByClassName("menu-con")[n];
	var poss = 0;
	var ids = setInterval(frames, 5);

	function frames() {
		if (poss <= -1 * window.innerHeight) {
			clearInterval(ids);
			elems.style.top = -1 * window.innerHeight + 'px';
		} else {
			poss += -7 - n * 2;
			elems.style.top = poss + 'px';
		}
	}
}*/
const btn=document.getElementsByClassName('btn')[0]
btn.addEventListener('click',()=>{
  btn.classList.toggle('hover')
  todrop[0].classList.toggle('droped')
  setTimeout(()=>{todrop[1].classList.toggle('droped')},100)
    setTimeout(()=>{todrop[2].classList.toggle('droped')},200)
  setTimeout(()=>{todrop[3].classList.toggle('droped')},300)

})
const todrop=document.querySelectorAll('.menu-con')

