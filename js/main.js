var employees = [["David",4], ["Jose",2], ["Alejandro",3]];
var salary;
for (let names = 0; names < employees.length; names++){
    if (employees[names][1] > 0){
        let discount;
        discount = employees[names][1]*(450*.02);
        salary = (450 * 30) - discount;
        console.log(employees[names] + ": $" + salary + ".00")
        console.log(employees[0][1])
    }    
}
