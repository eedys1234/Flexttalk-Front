
const curry = f => (a, ..._) => _.length > 1 ? f(a, ..._) : (..._) => f(a, ..._);

const noop = () => {};

const reduceF = (acc, a, f) => a instanceof Promise ? a.then(a => f(acc, a)) : f(acc, a);

const reduce = (f, acc, iter) => {
        
        if(!iter) {
            iter = acc[Symbol.iterator]();
            acc = iter.next().value;
        }

        return go1(acc, function recur(acc) {
            
            for(const a of iter) {
                acc = reduceF(acc, a, f);
                if(acc instanceof Promise) return acc.then(recur)
            }

            return acc;
        });
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

        return (function recur() {

            for(const a of iter) {
                if(a instanceof Promise) {
                    a.then(value => {
                        res.push(value);
                        return l == res.length ?  res : recur();
                    })
                }
                res.push(a);
                if(l === res.length) return res;
            }
    
            return res;
    
        })();
    });

const takeAll = curry(iter => take(Infinity, iter));

const partitionBy = curry((f, iter) => {
    return reduce(
        (group, a) =>
        go1(f(a), (k) => ((group[k] || (group[k] = [])).push(a), group))
        , {}, iter);
});

const flatten = (iter) => go(iter,L_filter, takeAll);

const join = curry((sep) => reduce((a, b) => `${a}${sep}${b}`));

const count = iter => iter.length; 

const isIter = a => a && a[Symbol.iterator];

const object = entries => go(
    entries,
    L_map(([k, v]) => ({[k]: v})),
    reduce(Object.assign)
);

const mapObject = (f, obj) => go(
    obj, 
    L_entries,
    L_map(([k, v]) => ({ [k]: f(v)})),
    reduce(Object.assign)
)

const pick = (iter, obj) => go(
    iter,
    L_map(a => obj[a]),
    L_entries,
    L_filter(([k, v]) => (v !== undefined)),
    object
)

const L_flatten = curry(function *(iter) {
    for(const a of iter) {
        if(isIter(a)) for(const b of a) yield b;
        else yield a;
    }
});

const L_flatMap = curry(function (f, iter) {
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

const L_keys = function* (obj) {
    for(const k in obj) {
        yield k;
    }
}

const L_values = function* (obj) {
    for(const k in obj) {
        yield obj[k];
    }
}

const L_entries = function* (obj) {
    for(const k in obj) {
        yield [k, obj[k]];
    }
}

const catchNoop = arr => {
    arr.forEach(p => p.catch(noop));    
    return arr;
}

const C_reduce = curry((f, acc, iter) => {

    const iter2 = catchNoop(iter ? [...iter] : [...acc]);
    iter ? reduce(f, acc, iter2) : reduce(f, iter2)

}); 

const C_take = curry((l, iter) => take(l, catchNoop([...iter])) );

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
    keys: L_keys,
    values: L_values,
    entries: L_entries,
};

export const C = {
    reduce: C_reduce,
    take: C_take,
};

