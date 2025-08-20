# Kagi HTML and JS Challenge - Aayan Shaikh
aayan@aayanshaikh.com

Hey! I spent about 6 hours working on these challenges and had a lot of fun with them. Here's what I built:

## What's Inside

I tackled two interesting problems: building expandable recipe widgets without any JavaScript, and optimising a court scheduling algorithm.

## Task 1 - HTML Recipes Widget

The goal was to create recipe widgets that expand and collapse, but no JavaScript allowed !

## Task 2 - JavaScript Optimisation

I needed to figure out when the hearing will end based on alphabetical order and the number of available judges.

I started with the obvious approach, sort everyone's names and find my position:

```javascript
function slowCourt(myName, judges, otherNames) {
    const allNames = [...otherNames.split(" "), myName];
    allNames.sort();
    const myIndex = allNames.indexOf(myName);
    return (Math.floor(myIndex / judges) + 1) * 30;
}
```

But then I realised I don't actually need to sort the entire list, I just need to know how many people come before me alphabetically:

```javascript
function fastCourt(myName, judges, otherNames) {
    const others = otherNames.split(" ");
    let countBefore = 0;
    for (let i = 0; i < others.length; i++) {
        if (others[i] < myName) countBefore++;
    }
    return (Math.floor(countBefore / judges) + 1) * 30;
}
```

This simple change dropped the complexity from O(n log n) to O(n), which makes a big difference with larger datasets.

## What You'll Find
```
./js-optimisation/index.js  # The court scheduling solution with benchmarks
./html-recipes/             # Both recipe widget implementations
./README.md                 # You're reading it!
```

Thanks for giving me an opportunity!