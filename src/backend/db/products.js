import { v4 as uuid } from "uuid";
import {
	krishna,
	cowSilver,
	sitaRam,
	hanuman,
} from "../../assets/images/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "SitaRamji",
		categoryName: "Wooden",
		description: "Material : Made with pure wooden",
		imgSrc: sitaRam,
		ratings: "4.5",
		price: 30000,
	},
	{
		_id: uuid(),
		title: "Hanumanji",
		categoryName: "Gold",
		description:
			"Material : Made with Oxidized Silver/available in Gold / Brass",
		imgSrc: hanuman,
		ratings: "5.5",
		price: 20000,
	},
	{
		_id: uuid(),
		title: "Cow Idol",
		categoryName: "Silver",
		description:
			"Material : Made with Oxidized Silver/available in Gold / Brass",
		imgSrc: cowSilver,
		ratings: "5.5",
		price: 40000,
	},
	{
		_id: uuid(),
		title: "Krishna Kaniya",
		categoryName: "Marble",
		description:
			"Material : Made with Oxidized Silver/available in Gold / Brass",
		imgSrc: krishna,
		ratings: "5",
		price: 30000,
	},
];
