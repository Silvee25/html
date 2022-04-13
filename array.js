//push
let dailyActivities=['eat','sleep'];
dailyActivities.push('exercise');
dailyActivities.unshift('work');
dailyActivities[2]='enjoy';
dailyActivities[3]='walking';
console.log(dailyActivities);

//pop
let dailyActivities1=['work','eat','sleep','exercise'];
dailyActivities1.pop();
console.log(dailyActivities1);
const removedElement =dailyActivities1.pop();
console.log(removedElement);
console.log(dailyActivities1);