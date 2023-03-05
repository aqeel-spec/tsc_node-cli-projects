#! usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import tableData from './tableData.js';
//import outputData from './output.js';
import { table } from 'table';

const UsdToPkr = 227.25
const PkrToUsd = 0.0044
const EuroToPkr = 242.33
const PkrToEuro = 0.0041
const UsdToEuro = 0.94
const EuroToUsd = 1.07

const PoundToPkr = 274.81
const PkrToPound = 0.0036
const UsdToPound = 0.83
const EuroToPOund = 0.88
const PoundToUsd = 1.21
const poundToEuro = 1.13
const poundToDirham = 4.44

const DirhamToPkr = 61.87
const PkrToDirham = 0.016
const UsdToDirham = 3.67
const EuroToDirham = 3.92
const DirhamToUsd = 0.27
const DirhamToEuro = 0.26
const DirhamToPound = 0.23

//          header
function sleep() {
  return new Promise((res, rej) => {
    setTimeout(res, 1000)
  })
}

async function welcome() {
  const rainbow = chalkAnimation.rainbow(`  ( ( ( ( ... Welcome in RzCalculator ) ) ) ) \n \n
    \n \t\t\t Designed by`)
  await sleep()
  rainbow.stop()
}
async function titleName() {
  await welcome()
  const title = chalkAnimation.neon(
    chalk.bgHex('#b6f0ea')(`\n\t\t\t\t\t${chalk.red('Aqeel Shahzad')}\n`),
  )
  await sleep()
  title.stop()
}

async function Question() {
  const currency: {
    CurrencyFrom: string
    CurrencyTo: string
    Amount: number
  } = await inquirer.prompt([
    {
      type: 'list',
      name: 'CurrencyFrom',
      message: chalk.green(' From which currency do you want to convert? : '),
      choices: ['USD', 'PKR', 'EURO', 'POUND', 'Dirham'],
    },
    {
      type: 'list',
      name: 'CurrencyTo',
      message: chalk.green(' To which currency do you want to convert? : '),
      choices: ['USD', 'PKR', 'EURO', 'POUND', 'Dirham'],
    },
    {
      type: 'number',
      name: 'Amount',
      message: chalk.yellowBright('Enter the amount you want to convert : '),
    },
  ])
  //let amount2 = 0;
  let showAmount;
  switch (currency.CurrencyFrom) {
    case 'USD':
      if (currency.CurrencyTo === 'PKR') {
        let amount = currency.Amount * UsdToPkr
        showAmount = (`${amount} Pakistani Rupees`);
        //return `${amount2} Pakistani Rupees`
        //console.log(`${amount2} Pakistani Rupees`)
      } else if (currency.CurrencyTo === 'EURO') {
        let amount = currency.Amount * UsdToEuro;
        showAmount = (`${amount} Euro`);
        //console.log(`${amount} Euro`)
      } else if (currency.CurrencyTo === 'POUND') {
        let amount = currency.Amount * UsdToPound
        showAmount = (`${amount} Pound sterling`);
      } else if (currency.CurrencyTo === 'Dirham') {
        let amount = currency.Amount * UsdToDirham
        showAmount = (`${amount} United Arab Emirates Dirham`)
      } else {
        let amount = currency.Amount
        showAmount = (`${amount} USD dollar`)
      }
      break
    case 'PKR':
      if (currency.CurrencyTo === 'USD') {
        let amount = currency.Amount * PkrToUsd
        showAmount = (`${amount} USD dollar`)
      } else if (currency.CurrencyTo === 'EURO') {
        let amount = currency.Amount * PkrToEuro
        showAmount = (`${amount} Euro`)
      } else if (currency.CurrencyTo === 'POUND') {
        let amount = currency.Amount * PkrToPound
        showAmount = (`${amount} Pound sterling`)
      } else if (currency.CurrencyTo === 'Dirham') {
        let amount = currency.Amount * PkrToDirham
        showAmount = (`${amount} United Arab Emirates Dirham`)
      } else {
        let amount = currency.Amount
        showAmount = (`${amount} Pakistani rupees`)
      }
      break
    case 'EURO':
      if (currency.CurrencyTo === 'USD') {
        let amount = currency.Amount * EuroToUsd
        showAmount = (`${amount} USD dollar`)
      } else if (currency.CurrencyTo === 'PKR') {
        let amount = currency.Amount * EuroToPkr
        showAmount = (`${amount} Pakistani rupees`)
      } else if (currency.CurrencyTo === 'POUND') {
        let amount = currency.Amount * EuroToPOund
        showAmount = (`${amount} Pound sterling`)
      } else if (currency.CurrencyTo === 'Dirham') {
        let amount = currency.Amount * EuroToDirham
        showAmount = (`${amount} United Arab Emirates Dirham`)
      } else {
        let amount = currency.Amount
        showAmount = (`${amount} Euro`)
      }
      break
    case 'POUND':
      if (currency.CurrencyTo === 'USD') {
        let amount = currency.Amount * PoundToUsd
        showAmount = (`${amount} USD dollar`)
      } else if (currency.CurrencyTo === 'PKR') {
        let amount = currency.Amount * PoundToPkr
        showAmount = (`${amount} Pakistani rupees`)
      } else if (currency.CurrencyTo === 'EURO') {
        let amount = currency.Amount * poundToEuro
        showAmount = (`${amount} Euro`)
      } else if (currency.CurrencyTo === 'Dirham') {
        let amount = currency.Amount * poundToDirham
        showAmount = (`${amount} United Arab Emirates Dirham`)
      } else {
        let amount = currency.Amount
        showAmount = (`${amount} Pound sterling`)
      }
      break
    case 'Dirham':
      if (currency.CurrencyTo === 'USD') {
        let amount = currency.Amount * DirhamToUsd
        showAmount = (`${amount} USD dollar`)
      } else if (currency.CurrencyTo === 'PKR') {
        let amount = currency.Amount * DirhamToPkr
        showAmount = (`${amount} Pakistani rupees`)
      } else if (currency.CurrencyTo === 'EURO') {
        let amount = currency.Amount * DirhamToEuro
        showAmount = (`${amount} Euro`)
      } else if (currency.CurrencyTo === 'POUND') {
        let amount = currency.Amount * DirhamToPound
        showAmount = (`${amount} pound stirling`)
      } else {
        let amount = currency.Amount
        showAmount = (`${amount} United Arab Emirates Dirham`)
      }
      break
  }
  //return {currency,amount2};
  const dataInTable = [currency.CurrencyFrom,currency.CurrencyTo,currency.Amount]
  const data = [
    ['From', 'To', 'Amount'],
    [...dataInTable],
  ]

  const config : any= {
    columnDefault: {
        width: 15,
      },
      header: {
        alignment: 'center',
        content: `${chalk.green(
          'Output : ',
        )} ${showAmount}`,
      },
  }

  console.log(table(data, config))
}
console.clear();
await titleName();
await tableData();
async function startAgain() {
  do {
    await Question();
    console.log('\n');
    var respond = await inquirer.prompt([
      {
        type: 'list',
        name: 'again',
        message: chalk.red('Do yau want to start again?'),
        choices: ['Yes', 'No'],
        default: false,
      },
    ])
  } while (respond.again === 'Yes' ? true : false)
}
startAgain();