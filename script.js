var tableBody = $("tbody");
class projectInformation {
    constructor(tProjectName, tProjectType, tHourlyWage, tDueDate) {
        this.projectName = tProjectName,
        this.projectType = tProjectType,
        this.hourlyWage = tHourlyWage,
        this.dueDate = tDueDate
    }
}
var projectNum = 1

function getFormValues(){
    var projectNameValue = $("#project-name").val();
    var projectTypeValue = $("#projet-type").val();
    var hourlyWageValue = $("#hourly-wage").val();
    var dueDateValue = $("#due-date").val();
    window[`project${projectNum}`] = new projectInformation(projectNameValue, projectTypeValue, hourlyWageValue, dueDateValue);
    
}
function calculateEarnings(){
    //insert code here
}

function displayContent() {
    tableBody.append("<tr></tr>");
    $("tbody tr").append("<td class = projectValue></td>");
    $("tbody tr").append("<td class = projectType></td>");
    $("tbody tr").append("<td class = projectWage></td>");
    $("tbody tr").append("<td class = projectDue></td>");
    $("tbody tr").append("<td class = projectEarnings></td>");
    $("td.projectValue").text(project1.projectName);
    $("td.projectType").text(project1.projectType);
    $("td.projectWage").text(project1.hourlyWage);
    $("td.projectDue").text(project1.dueDate);



    
}