var objKoders = [
    {
        firstName: "Isaac",
        lastName: "Mendoza",
        grade: 8,
    },

    {
        firstName: "Jos",
        lastName: "Avalos",
        grade: 5,  
    },

    {
        firstName: "Alex",
        lastName: "Aguilar",
        grade: 6,
    }
];



function groupAverage() {
    let gradeAddition = 0;
    let totalStudents = objKoders.length;
    let average;

    objKoders.forEach(koder => {
    gradeAddition += koder.grade;
    average = gradeAddition/totalStudents;

    })
return average
}