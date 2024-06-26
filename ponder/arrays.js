//Activity 2: Map

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

//Activity 3: Reduce

const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//Activity 4: Filter

const words = ["watermelon", "peach", "apple", "tomato", "grape"]

const shortWords = words.filter((word) => word.length < 6);

//Activity 5: indexOf

numberArray = [12, 34, 21, 54];

const luckNumber = 21;

let luckyIndex = numberArray.indexOf(luckNumber);
