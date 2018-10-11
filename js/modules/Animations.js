class Animations {
	constructor() {
		this.headerList = Array.from(document.getElementsByClassName('animate-header'));
		this.num = 0;
		this.nums = this.headerList.length;
		this.timer;
		this.onScreenLoad();
	}

	onScreenLoad() {	
			
		for(var i = 0; i < this.headerList.length; i++) {
			this.headerList[i].velocity({top: '-300px', transform: ["scale(0.2)", "scale(0)"]},100);
		}
		this.timer = setTimeout(this.animate.bind(this), 400);

	}

	animate() {
		// this.headerList;
		this.headerList[this.num].velocity({top: '0px'}, 400).velocity({transform: ["scale(0.6)", "scale(0.2)"]},1000);
		this.headerList[this.num].style.position = 'relative';
		
		this.num += 1;
		
		if(this.num < this.nums) {
			// you forgot to bind this!! DOH!!
			setTimeout(this.animate.bind(this),100);
		} else {
			clearTimeout(this.timer);
		}
	}	
}

export default Animations;