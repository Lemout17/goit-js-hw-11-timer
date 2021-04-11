const arrayOfSpans = document.querySelectorAll('.value');
        

class CountdownTimer {
    constructor({selector, targetDate, name, emoji}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.name = name;
        this.emoji = emoji;
        
        
    }

    myBirthday() {
        const titleTimer = document.querySelector(this.selector);
        
        titleTimer.insertAdjacentHTML('beforebegin', `<p class="title"> ${this.emoji} До дня рождения ${this.name} осталось:</p>`);
        this.getDate();

    }

    getDate() {
        this.targetDate = new Date(this.targetDate).getTime();
        this.getTimer();
    }

    getTimer() {
        this.interval = setInterval(() => {
            this.currentDate = Date.now();
            this.date = this.targetDate - this.currentDate;
            
            if (this.date <= 0) {
                this.date = 0;
                clearInterval(this.interval);
            }
            
            
            this.calculate(this.date);
        }, 1000);
    }

    
    calculate() {
        
        const days = Math.floor(this.date / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((this.date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((this.date % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((this.date % (1000 * 60)) / 1000));
        
        const arrayOfData = [days, hours, mins, secs];
        arrayOfSpans.forEach((el, i) => el.textContent = arrayOfData[i]);
        
    }
    
    pad(value) {
        return String(value).padStart(2, '0');
    }

    
}

const vlad = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 20, 2021'),
  name: 'Vlad',
  emoji: '&#10024',
   
});

vlad.myBirthday();



