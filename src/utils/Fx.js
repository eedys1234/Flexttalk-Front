
//curry
export const curry = f => (a, ..._) => _.length > 1 ? f(a, ..._) : (..._) => f(a, ..._); 

export const go = (a, ...fs) => {
    for(const f of fs) {
        a = f(a);
    }
    return a;
}

export const l_map = curry(function* (f, iter) {
    let res = [];
    for(const a of iter) {
        res.push(yield f(a));
    }
    return res;
})

export const map = curry((f, iter) => {
    return go(
        iter, 
        l_map(f), 
        takeAll);    
})

export const l_filter = curry((f, iter) => {
    let res = [];
    for(const a of iter) {
        if(f(a)) res.push(a);
    }
    return res;
})

export const filter = curry((f, iter) => {
    return go(
        iter,
        l_filter(f),
        takeAll
    );
});

export const take = (l, iter) => {
    let res = [];

    for(const a of iter) {
        res.push(a);
        if(res.length == l) return res;        
    }

    return res;
}

export const takeAll = iter => take(Infinity, iter);

