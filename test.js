const test = require("ava")
const findLast = require(".")

test("main", t => {
	t.is(findLast(["a", "b", "bba", "cc", "d"], value => value.includes("a")), "bba")
	t.is(findLast([], () => {}), undefined)
})
