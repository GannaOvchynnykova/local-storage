const CONTACT_KEY='CONTACT';

class Store{

    static save(contact){
        const allContacts=this.getAll();
        allContacts.push(contact);
        this.updateLocalStorage(allContacts);
    }

    static getAll(){
        let str=localStorage.getItem(CONTACT_KEY);
        if(!str){
            return []
        }
        /* const contacts=JSON.parse(str)
        console.log(contacts)
        return contacts */
        return (str)?JSON.parse(str):[]
    }

    static updateLocalStorage(contacts){
        localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts))
    }

    static remove(index) {
        const allContacts = this.getAll();
        allContacts.splice(index, 1);
        if (allContacts.length === 0) {
            localStorage.removeItem(CONTACT_KEY);
        } else {
            this.updateLocalStorage(allContacts)
        }
    }
}

