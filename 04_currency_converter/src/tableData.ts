import chalk from "chalk";
import { table } from "table";

async function tableData() {
    const data = [
      ['Currency', 'PKR', 'Symbol', 'Country'],
      ['Dollar', 'Rs.227.25', '$', 'US'],
      ['Euro', 'Rs.242.33', '€', '12 count.'],
      ['Pound', 'Rs.274.81', '£', 'UK'],
      ['Dirham', 'Rs.61.87', 'د.إ', 'UAE'],
    ]
    console.log()
    const config: any = {
      columnDefault: {
        width: 12,
      },
      header: {
        alignment: 'center',
        content: `${chalk.green(
          'Currency to PKR Rates',
        )} \n\nAvailable currency rates as of 07-01-2023`,
      },
    }
    const ftable = chalk.cyan(table(data, config))
    console.log(ftable)
  }
export default tableData;