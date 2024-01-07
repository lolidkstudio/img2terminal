#!/usr/bin/env bun
import { program } from "commander";
import { version } from "../package.json";
import { main } from "./commands/main";
import { show } from "./commands/show";
import chalk from "chalk";

program
	.name(chalk.magenta.bold("img2terminal"))
	.description("Shows an image in the terminal")
	.version(chalk.grey(version))
	.action(main);

// add filetypes
program
	.command("show")
	.description("Show an image in the terminal")
	.argument(
		chalk.grey("file"),
		"file to show in the terminal (allowed filetypes are .bmp, .gif, .jpeg, .png, .tiff)",
	)
	.action(show);

program.parse();
