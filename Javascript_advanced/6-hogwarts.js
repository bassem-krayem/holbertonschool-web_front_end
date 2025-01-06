class studentHogwarts {
    // Private variables
    #privateScore = 0;
    #name = null;

    // Private method to change score by a certain number of points
    #changeScoreBy(points) {
        this.#privateScore += points;
    }

    // Public method to set the student's name
    setName(newName) {
        this.#name = newName;
    }

    // Public method to reward the student (increase score by 1)
    rewardStudent() {
        this.#changeScoreBy(1);
    }

    // Public method to penalize the student (decrease score by 1)
    penalizeStudent() {
        this.#changeScoreBy(-1);
    }

    // Public method to get the student's name and score
    getScore() {
        return `${this.#name}: ${this.#privateScore}`;
    }
}

// Creating the `harry` instance
const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent(); // Rewarded 1 point
harry.rewardStudent(); // Rewarded 1 point
harry.rewardStudent(); // Rewarded 1 point
harry.rewardStudent(); // Rewarded 1 point
console.log(harry.getScore()); // Output: Harry: 4

// Creating the `draco` instance
const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent(); // Rewarded 1 point
draco.penalizeStudent(); // Penalized 1 point
draco.penalizeStudent(); // Penalized 1 point
draco.penalizeStudent(); // Penalized 1 point
console.log(draco.getScore()); // Output: Draco: -2
