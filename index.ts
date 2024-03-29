#!/usr/bin/env node
import inquirer from "inquirer"

let myPin = 1233
let myBalance = 10000

let answer = await inquirer.prompt(
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    }
)

if(answer.pin === myPin){
    console.log("Welcome to your account!")

    let action = await inquirer.prompt(
        {
            name: "operation",
            message: "Select one option:",
            type: "list",
            choices: ["Check Balance", "Fast Cash", "Withdraw"]
        }
    )

    console.log(action.operation)

    if(action.operation === "Check Balance"){
        console.log("Your balance is " + myBalance)
    } else if (action.operation === "Withdraw") {
        
        let amount = await inquirer.prompt(
            {
                name: "withdraw",
                message: "Enter amount you'd like to withdraw:",
                type: "number"

            }
        )
        
        if(amount.withdraw > myBalance){
            console.log("Unable to process transaction! Your total balance is " + myBalance)
        } else if(amount.withdraw <= myBalance){
        amount.withdraw = myBalance - amount.withdraw
        console.log("Your remaining balance is " + amount.withdraw)
        }

    } else if(action.operation === "Fast Cash"){
        let fastcash = await inquirer.prompt(
            {
                name: "CashAns",
                message: "Choose amount you'd like to cash fast:",
                type: "list",
                choices: ["1000", "2000","5000", "10000"]
            }
        )

        myBalance = myBalance - fastcash.CashAns
        console.log("Your remaining balance is " + myBalance);
        
    }
    
} else {
    console.log("Incorrect pin!!!")
} 
