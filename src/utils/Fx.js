
const curry = f => (a, ..._) => _.length > 1 ? f(a, ..._) : (..._) => f(a, ..._);

const reduce = (f, acc, iter) => {
        
        if(!iter) {
            iter = acc[Symbol.iterator]();
            acc = iter.next().value;
        }

        for(const a of iter) {
            acc = f(acc, a);
        }

        return acc;
    };

const go = (...args) => reduce((a, f) => f(a), args);

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a); 
    
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const map = curry((f, iter) => {
        let res = [];
        for(const a of iter) {
            res.push(f(a));
        }
        return res;
    });

const filter = curry((f, iter) => {
        let res = [];
        for(const a of iter) {
            if(f(a)) res.push(a);
        }
        return res;
    });
    
const take = curry((l, iter) => {
        let res = [];
        for(const a of iter) {
            res.push(a);
            if(l == res.length) return res;
        }

        return res;
    });

const takeAll = curry(iter => take(Infinity, iter));

const partitionBy = curry((f, iter) => {
    return reduce(
        (group, a) =>
        go1(f(a), (k) => ((group[k] || (group[k] = [])).push(a), group))
        , {}, iter);
});

const flatten = (iter) => go(iter,L_filter, takeAll)

const count = iter => iter.length; 

const isIter = a => a && a[Symbol.iterator];

const L_flatten = curry(function *(iter) {
    for(const a of iter) {
        if(isIter(a)) for(const b of a) yield b;
        else yield a;
    }
});

const L_flatMap = curry(function* (f, iter) {
    return go(iter, 
        L_map(f),
        L_flatten)
});

const L_map = curry(function* mapL(f, iter) {
    
    for(const a of iter) {
        yield go1(a, f);
    }
})

const L_filter = curry(function* filterL(f, iter) {

    for (const a of iter) {
        const b = go1(a, f);
        if(b) yield a;
      }
})

const L_find = curry(function findL(f, iter) {
    return {...go(
        iter, 
        L_filter(f),
        take(1)
        )};
})

export const _ = {
    reduce,
    go,
    pipe,
    map,
    filter,
    take,
    takeAll,
    partitionBy,
    count,
    flatten,
};

export const L = {
    filter: L_filter,
    map: L_map,
    find: L_find,
    flatten: L_flatten,
    flatMap: L_flatMap,
};