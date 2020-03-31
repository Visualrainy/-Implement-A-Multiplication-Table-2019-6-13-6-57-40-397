import multiplyTable from '../main'

it("should return null when the start number is greater than end number", () => {
    expect(multiplyTable(6, 5)).toBe(null)
})

it("should print multiply table as expected", () => {
    expect(multiplyTable(5, 6)).toBe('5*5=25\n5*6=30 6*6=36')
})