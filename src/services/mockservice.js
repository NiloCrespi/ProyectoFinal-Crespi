const database = [
	{
		id: 1,
		category: "Carteras",
		product: "Gymnostomiella Moss",
		detail: "Gymnostomiella Fleisch.",
		stock: 9,
		price: 90,
		imgurl: "http://dummyimage.com/300x300.png/dddddd/000000"
	},
	{
		id: 2,
		category: "Accesorios",
		product: "Graceful Buttercup",
		detail: "Ranunculus inamoenus Greene",
		stock: 6,
		price: 70.82,
		imgurl: "http://dummyimage.com/300x300.png/dddddd/000000"
	},
	{
		id: 3,
		category: "Carteras",
		product: "Hevea",
		detail: "Hevea Aubl.",
		stock: 8,
		price: 686.66,
		imgurl: "http://dummyimage.com/300x300.png/ff4444/ffffff"
	},
	{
		id: 4,
		category: "Accesorios",
		product: "Dane's Dwarf Gentian",
		detail: "Gentianella tenella (Rottb.) Börner",
		stock: 6,
		price: 741.18,
		imgurl: "http://dummyimage.com/300x300.png/cc0000/ffffff"
	},
	{
		id: 5,
		category: "Carteras",
		product: "Lemon Grass",
		detail: "Cymbopogon Spreng.",
		stock: 2,
		price: 783.88,
		imgurl: "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
	},
	{
		id: 6,
		category: "Accesorios",
		product: "Cup Lichen",
		detail: "Cladonia stricta (Nyl.) Nyl. var. uliginosa Ahti",
		stock: 7,
		price: 186.51,
		imgurl: "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
	},
	{
		id: 7,
		category: "Carteras",
		product: "Pukiawe",
		detail: "Styphelia tameiameiae (Cham. & Schltdl.) F. Muell.",
		stock: 1,
		price: 679.25,
		imgurl: "http://dummyimage.com/300x300.png/ff4444/ffffff"
	},
	{
		id: 8,
		category: "Accesorios",
		product: "Minthorn's Milkvetch",
		detail: "Astragalus minthorniae (Rydb.) Jeps.",
		stock: 9,
		price: 367.27,
		imgurl: "http://dummyimage.com/300x300.png/cc0000/ffffff"
	},
	{
		id: 9,
		category: "Carteras",
		product: "Redflame",
		detail: "Hemigraphis reptans (G. Forst.) T. Anderson ex Hemsl.",
		stock: 6,
		price: 544.08,
		imgurl: "http://dummyimage.com/300x300.png/ff4444/ffffff"
	},
	{
		id: 10,
		category: "Accesorios",
		product: "Phaeospora",
		detail: "Phaeospora Hepp ex Stein",
		stock: 6,
		price: 738.09,
		imgurl: "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
	},
]


const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(database);
        }, 2000);
    });
};

const getProduct = (idURL) => {
    return new Promise((resolve, reject) => {
        const reqItem = database.find((item) => {
            return item.id === parseInt(idURL);
        });

        setTimeout(() => {
            if (reqItem) resolve (reqItem);
            else reject("No se encontró el producto");
        }, 2000);
    });
};

const getProductsByCategory = (categoryURL) => {
    return new Promise((resolve) => {
        let reqItems = database.filter((item) => item.category === categoryURL);

        setTimeout(() => {
            resolve(reqItems);
        }, 2000);
    });
};

export default getProducts;

export {getProduct, getProductsByCategory}