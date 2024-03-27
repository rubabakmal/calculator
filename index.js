import inquirer from "inquirer";
async function main() {
    while (true) {
        let name = await inquirer.prompt([
            {
                name: "name",
                message: "Enter your name: ",
                type: "input",
            },
        ]);
        console.log(name.name);
        let operations = await inquirer.prompt([
            {
                name: "operation",
                message: "Kindly select your operation",
                type: "list",
                choices: [
                    "Addition",
                    "Subtraction",
                    "Multiplication",
                    "Division",
                    "Module",
                ],
            },
        ]);
        const { num1, num2 } = await inquirer.prompt([
            {
                name: "num1",
                message: "Enter First number",
                type: "input",
                validate: function (value) {
                    if (isNaN(value)) {
                        return "Please enter a valid number.";
                    }
                    return true;
                },
            },
            {
                name: "num2",
                message: "Enter Second number",
                type: "input",
                validate: function (value) {
                    if (isNaN(value)) {
                        return "Please enter a valid number.";
                    }
                    return true;
                },
            },
        ]);
        let final_result;
        switch (operations.operation) {
            case "Addition":
                final_result = parseFloat(num1) + parseFloat(num2);
                break;
            case "Subtraction":
                final_result = parseFloat(num1) - parseFloat(num2);
                break;
            case "Multiplication":
                final_result = parseFloat(num1) * parseFloat(num2);
                break;
            case "Division":
                final_result = parseFloat(num1) / parseFloat(num2);
                break;
            case "Module":
                final_result = parseFloat(num1) % parseFloat(num2);
                break;
            default:
                final_result = "Something went wrong.";
        }
        console.log(`Result of ${operations.operation}: ${final_result}`);
        const { again } = await inquirer.prompt([
            {
                name: "again",
                message: "Do you want to perform another operation?",
                type: "confirm",
            },
        ]);
        if (!again) {
            console.log("Thank you for using the calculator. Goodbye!");
            break;
        }
    }
}
main();
