import { v4 as uuid } from "uuid";
import {
	krishna,
	cowSilver,
	sitaRam,
	hanuman,
	gold,
} from "../../assets/images/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Sita Ram Sculpture",
		categoryName: "Wooden",
		description:
			"Shri Ram With Mata Sita Wooden Wall Mount Sculpture '24'",
		imgSrc: sitaRam,
		ratings: 4.5,
		availability: {
			status: true,
			badge: "new",
		},
		specification: {
			material: "Wooden",
			weight: 7.6,
			dimensions: "H-24, L-15, W-4 (Inches)",
		},
		brand: "Shilpkaart",
		price: 12560,
	},
	{
		_id: uuid(),
		title: "Veer Hanumana",
		categoryName: "Gold",
		description:
			"Veer hanumanji in meditation golden sculpture",
		imgSrc: hanuman,
		ratings: 5,
		availability: {
			status: true,
			badge: "trending",
		},
		specification: {
			material: "Gold",
			weight: 8,
			dimensions: "H-24, L-12, W-5 (Inches)",
		},
		brand: "Shilpkaart",
		price: 30100,
	},
	{
		_id: uuid(),
		title: "Cow Idol with her calf",
		categoryName: "Silver",
		description:
			"Silver Shri Kamdhenu Cow With Calf Decorative Showpiece",
		imgSrc: cowSilver,
		ratings: 3.5,
		availability: {
			status: true,
			badge: "new",
		},
		specification: {
			material: "Oxidized Silver",
			weight: 2.6,
			dimensions: "H-14, L-8, W-3 (Inches)",
		},
		brand: "Shilpkaart",
		price: 15000,
	},
	{
		_id: uuid(),
		title: "Shri Krishna on lotus ",
		categoryName: "Marble",
		description: "Glorious Shri Krishna on Holy Lotus",
		imgSrc: krishna,
		ratings: 5,
		availability: {
			status: true,
			badge: "new",
		},
		specification: {
			material: "Marbel",
			weight: 3.8,
			dimensions: "H-24, L-25, W-6 (Inches)",
		},
		brand: "Shilpkaart",
		price: 30000,
	},
	{
		_id: uuid(),
		title: "Shri Vishnu on Lotus ",
		categoryName: "Gold",
		description:
			"Glorious Shri Vishnu standing on Holy Lotus with shankh, chakra, gaddayutha and blessings",
		imgSrc: gold,
		ratings: 5,
		availability: {
			status: false,
			badge: "out of stock",
		},
		specification: {
			material: "Gold",
			weight: 15,
			dimensions: "H-27, L-15, W-6 (Inches)",
		},
		brand: "Shilpkaart",
		price: 50000,
	},
];
