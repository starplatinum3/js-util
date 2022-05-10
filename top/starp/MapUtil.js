

class MapUtil{
    _strMapToObj(strMap){
        let obj= Object.create(null);
        for (let[k,v] of strMap) {
          obj[k] = v;
        }
        return obj;
      }
      /**
      *map转换为json
      */
      _mapToJson(map) {
      return JSON.stringify(this._strMapToObj(map));
      }
      
}

export default MapUtil