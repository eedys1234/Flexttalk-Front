
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


export const _ = {
    reduce,
    go,
    pipe,
    map,
    filter,
    take,
    takeAll,
}