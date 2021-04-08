class CountdownTimer {
    constructor({selector, targetDate}) {
        this.element = document.querySelector(selector);
        this.targetDate = targetDate;
        this.currentDate;
        this.date;
    }
    myBirthday() {
        this.element.insertAdjacentHTML('afterbegin', '<p class="title">&#10024До моего дня рождения осталось:</p>');
        this.getDate();
    }
    getDate() {
        this.targetDate = new Date(this.targetDate).getTime();
        this.getTimer();
    }

    getTimer() {
        const interval = setInterval(() => {
            this.currentDate = Date.now();
            this.date = this.targetDate - this.currentDate;
            
            if (this.date <= 0) {
                this.date = 0;
                clearInterval(interval);
            }
            
            
            this.calculate(this.date);
        }, 1000);
    }
    
    calculate() {
        const refs = {
            days: document.querySelector(`
            [data-value="days"]`),
            hours: document.querySelector(`
            [data-value="hours"]`),
            mins: document.querySelector(`
            [data-value="mins"]`),
            secs: document.querySelector(`
            [data-value="secs"]`)
        }

        const days = Math.floor(this.date / (1000 * 60 * 60 * 24));
        refs.days.textContent = `${days}`;
        
        const hours = this.pad(Math.floor((this.date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        refs.hours.textContent = `${hours}`;
        
        const mins = this.pad(Math.floor((this.date % (1000 * 60 * 60)) / (1000 * 60)));
        refs.mins.textContent = `${mins}`;
        
        const secs = this.pad(Math.floor((this.date % (1000 * 60)) / 1000));
        refs.secs.textContent = `${secs}`;
    }
    
    pad(time) {
        return String(time).padStart(2, '0');
    }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 20, 2021'),
   
});

timer.myBirthday();