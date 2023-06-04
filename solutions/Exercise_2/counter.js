
function createCounter (n) {
    return function() {
        return n ++
    };
};

const counter = createCounter(10);
counter();
counter();
counter();
