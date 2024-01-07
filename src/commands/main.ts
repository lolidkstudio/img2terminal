import chalk from "chalk";

function main() {
	const text = `
_______________________________________________________________________
                      __                                               
    ,               /    )                            ,               /
-------_--_----__----___/---_/_----__---)__---_--_--------__----__---/-
  /   / /  ) /   ) /        /    /___) /   ) / /  ) /   /   ) /   ) /  
_/___/_/__/_(___/_/____/___(_ __(___ _/_____/_/__/_/___/___/_(___(_/___
               /                                                       
           (_ /                                                        
	`;

	console.log(chalk.magenta(text));
	console.log("For help, run:");
	console.log(chalk.white.bold("img2terminal --help"));
}

export { main };
