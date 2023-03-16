/**
*
*/
export function subtract(a, b) {
	return a - b;
}

/**
*
*/
export function prop(obj, propName) {
	return obj[propName];
}


/**
* 
* @param {Array} input un tableau de donnée
* @param {Function} fn une fonction de traitement qui prend en paramètre un tableau de donnée
* @return {Array} un tableau de donnée filtré du même type que le tableau d'entrée
*/
export function filter(fn, input) {
	return fn(input);
}


/**
 * Créé class et interface necessaire a rendre le code suivant valide
 */
function isDownloadProduct(arg: IDownloadProduct | IShipableProduct): arg is IDownloadProduct {
  return (arg as IDownloadProduct).file !== undefined;
}

function productFactory(product) {
	if (isDownloadProduct(product)) {
		new DownloadProduct(product)
	} else {
		new ShipableProduct(product)
	}
}
