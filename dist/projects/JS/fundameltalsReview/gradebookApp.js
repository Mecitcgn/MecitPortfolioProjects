/*
function getAverage(arr){
  let total = arr.reduce((acc, cur) => acc += cur);
  return total / arr.length;
}
function getGrade(studentScore){
  if(studentScore === 100) return "A+";
  else if(studentScore >= 90) return "A";
  else if(studentScore >= 80) return "B";
  else if(studentScore >= 70) return "C";
  else if(studentScore >= 60) return "D";
  else if(studentScore >= 0) return "F";
}
function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(arrScore, studentScore){
  const averageScore = getAverage(arrScore);
  const grade = getGrade(studentScore);
  const hasPass = hasPassingGrade(studentScore);

  if(hasPass){
    return `Class average: ${averageScore}. Your grade: ${grade}. You passed the course.`;
  }
  else{
    return `Class average: ${averageScore}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// "Class average: 71.7. Your grade: F. You failed the course."

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// "Class average: 50.8. Your grade: A+. You passed the course."
*/