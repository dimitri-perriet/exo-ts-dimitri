/**
*
*/
export function subtract(a : number, b : number) {
	return a - b;
}

/**
*
*/
export function prop<T, K extends keyof T>(obj: T, propName: K) {
	return obj[propName];
}


/**
* 
* @param {Array} input un tableau de donnée
* @param {Function} fn une fonction de traitement qui prend en paramètre un tableau de donnée
* @return {Array} un tableau de donnée filtré du même type que le tableau d'entrée
*/


export function filter<T>(fn: (input: T[]) => T[], input: T[]) {
	return fn(input);
}


/**
 * Créé class et interface necessaire a rendre le code suivant valide
 */
interface IDownloadProduct {
	file: string;
}

interface IShipableProduct {
	address: string;
}

class DownloadProduct implements IDownloadProduct {
	file: string;

	constructor(product: IDownloadProduct) {
		this.file = product.file;
	}
}

class ShipableProduct implements IShipableProduct {
	address: string;

	constructor(product: IShipableProduct) {
		this.address = product.address;
	}
}
function isDownloadProduct(arg: IDownloadProduct | IShipableProduct): arg is IDownloadProduct {
  return (arg as IDownloadProduct).file !== undefined;
}

function productFactory(product : IDownloadProduct | IShipableProduct) {
	if (isDownloadProduct(product)) {
		new DownloadProduct(product)
	} else {
		new ShipableProduct(product)
	}
}
