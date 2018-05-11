var tween = false;


function test(){
	if( tween ) return; //避免動畫執行中，又再次被執行

	tween = true;

	//中間跑去右邊
	TweenMax.to( $('.city__center'), 0.5, {left: $('.city__left').css('left'), transform: $('.city__left').css('transform'), filter: $('.city__left').css('filter'), zIndex: $('.city__left').css('zIndex')} )
	//右邊跑到左邊
	TweenMax.to( $('.city__left'), 0.5, {left: $('.city__right').css('left'), transform: $('.city__right').css('transform'), filter: $('.city__right').css('filter'), zIndex: $('.city__right').css('zIndex')} )
	//左邊跑道中間
	TweenMax.to( $('.city__right'), 0.5, {left: $('.city__center').css('left'), transform: $('.city__center').css('transform'), filter: $('.city__center').css('filter'), zIndex: $('.city__center').css('zIndex'), onComplete:finish} )
}

function finish(){
	tween = false;
}


var timer = 0;

loop();

function loop(){
	timer++;
	if(timer > 120){
		timer = 0;
		test();
	}
	requestAnimationFrame(loop);
}