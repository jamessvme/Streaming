import { ListType } from '$lib/types/List';

/** Dispatch event on click outside of node */
export function clickOutside(node: any) {
	const handleClick = (event: any) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export const getObjectTypeFromURL = (data: any): string => {
	const url = data.name + '/' + data.path;
	if (url.search(data.name + '/tree') >= 0) return ListType.FOLDER;
	else if (url.search(data.name + '/blob') >= 0) return ListType.FILE;
	else return ListType.FOLDER;
};

export const replaceSlashfromURL = (url: string): string => {
	return url.replace(/[/]/g, '-');
};

export const removeFileTypeFromURL = (data: any, type: string): string => {
	let url = '';
	if (!data.path) return url;
	if (type === ListType.FOLDER) url = data.path.replace(/tree[/]/, '');
	else url = data.path.replace(/blob[/]/, '');
	return url;
};

export const getBreadCrumbs = (libraryName: string, path: string): any => {
	let result = [{ url: libraryName, label: libraryName }];
	let items = path.split('/');

	items.forEach((item: string) => {
		if (!(item === 'blob' || item === 'tree' || item === 'find')) {
			let url = path.slice(0, path.search(item) + item.length);
			url = `${libraryName}/${url}`;
			if (item.search(/\./) < 0) {
				let suburl = url.replace('blob', 'tree');
				result.push({
					url: suburl,
					label: item
				});
			} else {
				result.push({
					url: url,
					label: item
				});
			}
		}
	});
	return result;
};

export const getFullFormatDateFromISOString = (isoString) => {
	const date = new Date(isoString);
	const year = date.getFullYear();
	let month: number | string = date.getMonth() + 1;
	let dt: number | string = date.getDate();

	if (dt < 10) {
		dt = '0' + dt;
	}
	if (month < 10) {
		month = '0' + month;
	}
	const fullDate = year + '-' + month + '-' + dt;
	return fullDate;
};
