class Model {
   constructor(obj) {
    this._model = obj;
   } 

   get(k) {
    return this._model[k];
   }

   set(k, v) {
       this._model[k] = v;
   }
}