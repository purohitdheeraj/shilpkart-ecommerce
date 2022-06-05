import { v4 as uuid } from "uuid";
import {
	wooden,
	gold,
	stone,
	marble,
	silver,
	brass,
} from "../../assets/images/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Wooden",
		imgSrc: wooden,
	},
	{
		_id: uuid(),
		categoryName: "Gold",
		imgSrc: gold,
	},
	{
		_id: uuid(),
		categoryName: "Stone",
		imgSrc: stone,
	},
	{
		_id: uuid(),
		categoryName: "Marble",
		imgSrc: marble,
	},
	{
		_id: uuid(),
		categoryName: "Silver",
		imgSrc: silver,
	},
	{
		_id: uuid(),
		categoryName: "Brass",
		imgSrc: brass,
	},
];
