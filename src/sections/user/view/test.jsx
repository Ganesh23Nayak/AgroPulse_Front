const myMap = new Map({"data":[{"labourId":1,"userId":1,"ratings":0,"equipment":"planters","rate":122123,"status":"ACTIVE","user":{"name":"kritarth"}},{"labourId":2,"userId":2,"ratings":0,"equipment":"tactors","rate":59998,"status":"ACTIVE","user":{"name":"Ganesh"}},{"labourId":3,"userId":3,"ratings":0,"equipment":"tactors","rate":2310,"status":"ACTIVE","user":{"name":"Suresh"}}]})

myMap.forEach((value, key) => {
    console.log(key, value);
})
