class Animations {
	constructor() {
		this.headerList = Array.from(document.getElementsByClassName('animate-header'));
		// this.animateHeader = document.getElementById('animate-header');
		this.num = 0;		
		this.letterCount = 0;
		this.nums = this.headerList.length;
		this.timer;
		this.onScreenLoad();
	}

	onScreenLoad() {	
		this.typeWrite();
		this.timer = setTimeout(this.typeWrite.bind(this));
	}

	typeWrite() {
		const text = `Hi, I'm Laura!`;
		console.log(text.length)
		if (this.letterCount < text.length) {
			document.getElementById('animate-header').innerHTML += text.charAt(this.letterCount);
			this.letterCount++;
			setTimeout(this.typeWrite.bind(this), 50);
		} else {
			clearTimeout(this.timer);
		}

	}	
}

export default Animations;