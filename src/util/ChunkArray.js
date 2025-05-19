const chunkArray = (array) => {
    const newArray = [];

    for (let i = 0; i < array.length; i += 2) {
        if (array[i + 1]?.title === 'Promo' || array[i + 1]?.title === 'Notice') {
            newArray.push([array[i], {}]);
            i -= 1;
        } else {
            newArray.push([array[i], array[i + 1]]);
        }
    }

    return newArray;
};

export default chunkArray;
