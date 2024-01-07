import chalk from "chalk";
import { type OptionValues, type Command } from "commander";
import Jimp from "jimp";

function show(name: string, options: OptionValues, command: Command) {
	const filePath = command.args[0];
	const fileNameParts = filePath.split(".");
	const fileExtension = fileNameParts[fileNameParts.length - 1];
	const allowedFileExtensions = ["bmp", "gif", "jpeg", "png", "tiff"];
	if (!allowedFileExtensions.includes(fileExtension)) {
		console.log(`error: unsupported file format "${fileExtension}"`);
	} else {
		Jimp.read(filePath)
			.then((image) => {
				const width = image.getWidth();
				const height = image.getHeight();
				const { columns } = process.stdout;
				let scaleFactor = 1;
				while (width / scaleFactor > columns) {
					scaleFactor++;
				}
				const MONOSPACE_HEIGHT2WIDTH_RATIO = 2;
				for (
					let y = 0;
					y < height;
					y += scaleFactor * MONOSPACE_HEIGHT2WIDTH_RATIO
				) {
					for (let x = 0; x < width; x += scaleFactor) {
						const pixelColor = image.getPixelColor(x, y);
						const { r, g, b } = Jimp.intToRGBA(pixelColor);
						// Using console.log() appends a newline, so process.stdout.write() is necessary.
						process.stdout.write(chalk.bgRgb(r, g, b)(" "));
					}
					process.stdout.write("\n");
				}
			})
			.catch((error) => console.error(error));
	}
}

export { show };
