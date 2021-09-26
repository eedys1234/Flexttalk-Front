const makeLPS = function(pattern) {
    
    let length = pattern.length;
    let lps = [];

    for(let i=0,j=1; i<length; i++) {

        while(j>0 && pattern.charAt(i) !== pattern.charAt(j)) {
            j = lps[j - 1];
        }

        if(pattern.charAt(i) === pattern.charAt(j)) {
            lps[i] = ++j;
        }
    }

    return lps;
}

export const kmp = function(sentence, pattern) {

    let s = sentence.length;
    let p = pattern.length;
    
    if(!p) return true;

    let lps = makeLPS(pattern);

    for(let i=0, j=0;i<s;i++) 
    {
        while(j > 0 && sentence.charAt(i) !== pattern.charAt(j)) {
            j = lps[j - 1];
        }

        if(sentence.charAt(i) === pattern.charAt(j)) {

            if(j == p-1) {
                j = lps[j];
                return true;
            }
            else {
                j++;
            }
        }
    }

    return false;
}

