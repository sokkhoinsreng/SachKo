import { getProducts } from "./dataServices";

export function pushToArray (docs){
    arrayData = [];
    docs.forEach(d => {
    const all = d.data()
        arrayData.push({
            ...all
        })
    })
    return(arrayData);
}
// export function getId(){
//     id="";
//     ref = getProducts().collection("data").document();
//     myId = ref.getId();
//     id=myId;
//     return(id)

// }