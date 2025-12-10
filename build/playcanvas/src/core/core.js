const version = '2.15.0-beta.0';
const revision = 'd5b7d9c25';
function extend(target, ex) {
		for(const prop in ex){
				const copy = ex[prop];
				if (Array.isArray(copy)) {
						target[prop] = extend([], copy);
				} else if (copy && typeof copy === 'object') {
						target[prop] = extend({}, copy);
				} else {
						target[prop] = copy;
				}
		}
		return target;
}

export { extend, revision, version };
