class SmallestIntegerFinder {
    findSmallestInt(args) {
        let leastInteger = args[0]

        for (let i = 1; i < args.length; i++) {
            if (args[i] < leastInteger) leastInteger = args[i]
        }

        return leastInteger
    }
}