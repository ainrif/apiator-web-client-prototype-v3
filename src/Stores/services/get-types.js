export function getTypes(apiTypes) {
    const titles = [];

    for (let i = 0; i < apiTypes.length; i++) {
        titles.push(apiTypes[i].type.split('.').pop());
    }

    return titles;
}
