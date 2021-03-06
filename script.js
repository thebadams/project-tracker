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
    var dueDateValue = $("#due-date");
    window[`project${projectNum}`] = new projectInformation(projectNameValue, projectTypeValue, hourlyWageValue, dueDateValue);
    projectNum++
    
}