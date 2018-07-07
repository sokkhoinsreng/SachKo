import { action, observable } from 'mobx';

export default class onProduct {
    @observable items = 0;
    @observable id = 0;
    @action
    onAdd(id) {
        
            this.items = this.items + 1

    }
    @action
    onReduce(id) {
            if (this.items > 0) {
                this.items = this.items - 1
            }

    }

    @action
    onType(value, id) {

            const convertedValue = Number(value)
            this.items = convertedValue

    }

    @action
    selectedID = (id) =>  {
        this.id = id
    //    this.id.push({
    //        id:id
    //    })
    }
}
