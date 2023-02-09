const addNum = require("./addi")

test("adds 1 + 2 to equal 3", () => {
    expect(addNum(1, 2)).toBe(3)
})