
const taskTypes = {
    timedTask: "Timed task", // Task that is just waiting
    countTask: "Count task", //Task that tells you do something x amount of times
    deadlineTask: "Deadline task" //Task that makes you do something x amount of times, but has a timed deadline

}

class Task {

    constructor(taskname, description) {
        this.taskname = taskname;
        this.description = description;

    }

}

class TimedTask extends Task {
    constructor(taskName, description, startTime,  deadline) {
        super(taskName, description);
        this.deadline = deadline;
        this.startTime = startTime;
    }

    isExpired() {
        return this.startTime > this.deadline;
    }

    percentageDone() {
        let taskLength = this.deadline - this.startTime;
        let currentProgress = new Date.getTime() - this.startTime;
        let percentage = currentProgress / currentProgress;   // decimal percentage aka 0.01 = 1%
        return percentage; 
    }

    percentageFormatted() {   
        return ((this.percentageDone() * 100).toFixed(2) + "%");   //Returns percentage for retards aka 0.56123 -> 56.12%
    }
    

}

class CountTask extends Task {

    constructor(taskName, description, item, count) {   //Item - the thing to do x times
        super(taskName, description);
        this.item = item;
        this.count = count;
        this.did = 0;
    }

    addItems(count) {   //Adds x times of said thing, returns true if the thing is done 
        this.did += count; 
        if (this.did >= count)
            return true;
        return false;
    }
}


export default Task;
