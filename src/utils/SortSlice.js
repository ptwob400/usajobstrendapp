function sortSlice10(arr) {
    arr.sort((a, b) => { return b.count - a.count })
    return arr.slice(0, 10)
}

export default sortSlice10;