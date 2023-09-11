let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
    }
};

ladder.up().up().down().showStep();
ladder.up().up().up().up().down().showStep(); 