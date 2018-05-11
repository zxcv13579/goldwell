var tween = false;

var one = ['狠蠟','泥好蠟','油不得你'];
var two = ['線條','輕感','亮感'];
var three = ['空氣感','蓬鬆感','服貼感'];
var four = ['霧面光澤','日韓微捲','局部支撐'];
var five = ['硬髮蠟，高度可塑性打造多層次風格，無傳統法蠟惱人油膩感','日韓微捲','局部支撐','混合式凝土，擁有髮泥清爽乾燥質地並且好型塑','可塑水洗式髮油，乾髮濕髮兩用髮油'];
var six = ['中長髮、細軟髮，保持造型一整天','短髮、粗髮+細軟髮','各種頭髮長度粗硬髮，髮型型塑沒有侷限'];
var num = 1;




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
		$('.city__itemOne').text(one[num]);
		$('.city__itemTwo').text(two[num]);
		$('.city__itemThree').text(three[num]);
		$('.city__itemFour').text(four[num]);
		$('.city__itemFive').text(five[num]);
		$('.city__itemSix').text(six[num]);
		num++;
		if(num == 3) num = 0;
	}
	requestAnimationFrame(loop);
}

