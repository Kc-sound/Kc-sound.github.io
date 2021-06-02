function swoop(text,totaltime = 2500, delaybeforeanimation = 0,infinite = false){
    let TextToAnimate = document.getElementById(text)
    let TTAString = TextToAnimate.innerHTML
    TextToAnimate.innerHTML = " "
    let tstime = totaltime / TTAString.length / 3;

    for(var x = 0; x < TTAString.length; x++){
        if (TTAString[x] === ' ') {
			TextToAnimate.innerHTML += "<span>" + '&nbsp;' + "</span>"
		}
		else{
			TextToAnimate.innerHTML += "<span>" + TTAString[x] + "</span>"
		}
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function elanimate(text){
        await sleep(delaybeforeanimation)
        text = text.getElementsByTagName('span')

        for (let i = 0; i < text.length; i++){
            setTimeout(()=> {
                text[i].classList.add('animate');
                }, i * tstime);
        }
        /*wait sleep(tstime * text.length + 100);
        for (let i = 0; i < text.length; i++){
            setTimeout(()=> {
                text[i].classList.add('animate2');
                }, i * tstime);
        }
        await sleep(tstime * text.length + 100);
        for (let i = 0; i < text.length; i++){
            setTimeout(()=> {
                text[i].classList.add('animate3');
                }, i * tstime);
        }*/
        if (infinite === true) {
            await sleep(2500);
            for (i = 0; i < text.length; i++){
                text[i].classList.remove('animate')
                text[i].classList.remove('animate2')
                text[i].classList.remove('animate3')
            }
            elanimate(TextToAnimate)
        }
    }
    elanimate(TextToAnimate)
}
function swoopwave(text,totaltime = 2500, delaybeforeanimation = 0,infinite = false){
    let TextToAnimate = document.getElementById(text)
    let TTAString = TextToAnimate.innerHTML
    TextToAnimate.innerHTML = " "
    let tstime = totaltime / TTAString.length / 3;

    for(var x = 0; x < TTAString.length; x++){
        if (TTAString[x] === ' ') {
			TextToAnimate.innerHTML += "<span>" + '&nbsp;' + "</span>"
		}
		else{
			TextToAnimate.innerHTML += "<span>" + TTAString[x] + "</span>"
        }
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function elanimate(text){
        await sleep(delaybeforeanimation)
        text = text.getElementsByTagName('span')

        for (let i = 0; i < text.length; i++){
            setTimeout(()=> {
                text[i].classList.add('animate');
                }, i * tstime);
        }
        await sleep(tstime * text.length + 100);
        for (let i = 0; i < text.length; i++){
            setTimeout(()=> {
                text[i].classList.add('animate2');
                }, i * tstime);
        }
        await sleep(tstime * text.length + 100);
        for (let i = 0; i < text.length; i++){
            setTimeout(()=> {
                text[i].classList.add('animate3');
                }, i * tstime);
        }
        if (infinite === true) {
            await sleep(2500);
            for (i = 0; i < text.length; i++){
                text[i].classList.remove('animate')
                text[i].classList.remove('animate2')
                text[i].classList.remove('animate3')
            }
            elanimate(TextToAnimate)
        }
    }
    elanimate(TextToAnimate)
}