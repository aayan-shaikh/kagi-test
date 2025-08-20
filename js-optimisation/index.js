// Current complexity = O(n log n)
function slowCourt(myName, judges, otherNames) {
    const allNames = [...otherNames.split(" "), myName];
    allNames.sort();
    const myIndex = allNames.indexOf(myName);
    const mySlot = Math.floor(myIndex / judges);
    return (mySlot + 1) * 30;
}

console.log("\nSlow sorting for Talor with 1 judge and names are Zagi Gul Naz Aryaman\nTime is: " + slowCourt("Talor", 1, "Zagi Gul Naz Aryaman") + "mins")

// New complexity = O(n) ~ much faster!
function fastCourt(myName, judges, otherNames) {
    const others = otherNames.split(" ");
    let countBefore = 0;
    for (let i = 0; i < others.length; i++) {
        if (others[i] < myName) countBefore++;
    }
    const myIndex = countBefore;
    const mySlot = Math.floor(myIndex / judges);
    return (mySlot + 1) * 30;
}

console.log("\nFast sorting for Mike with 1 judge and names are Zagi Gul Naz Aryaman\nTime is: " + fastCourt("Mike", 1, "Zagi Gul Naz Aryaman") + "mins")

// Benchmark
function benchmark() {
    console.log("\n\nStart benchmarking")
    const names = Array.from({ length: 10000 }, (_, i) => "Name" + i).join(" ");
    console.time("Fast Court");
    for (let i = 0; i < 1000; i++) {
        fastCourt("Name9999", 3, names);
    }
    console.timeEnd("Fast Court");

    // Slow version
    console.time("Slow Court");
    for (let i = 0; i < 1000; i++) {
        slowCourt("Name9999", 3, names);
    }
    console.timeEnd("Slow Court");
}

benchmark();