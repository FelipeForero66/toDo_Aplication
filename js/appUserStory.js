class Data2{
    constructor(description2){
        this._description2 = description2;
    }

    get description2(){
        return this._description2;
    }

    set description2(description2){
        this._description2 = description2;
    }

}



class UserStory extends Data2{
    static counterUserStories = 0;

    constructor(description2){
        super(description2);
        this._id = ++UserStory.counterUserStories;

    }

    get id(){
        return this._id;
    }
}


let userStories = [
    new UserStory('primer User Story'),
    new UserStory('segundo User Story')
    
];




function showUserStories(){
    console.log("Mostrar userStories")
    let texto2 = "";
    for(let userStory of userStories){
        console.log(userStory)
        texto2 += `<li>${userStory.description2}</li>`;
    }
    document.getElementById('userStories').innerHTML = texto2;
}


function addUserStory(){
    const forma2 = document.forms['forma2'];
    const description2 = forma2['description2'];
    if(description2.value != ''){
        const userStory = new UserStory(description2.value);
        console.log(userStory)
        userStories.push(userStory);
        showUserStories();
    }
    else{
        console.log("No hay informacion que agregar")
    }
}

let deleteUserStory = (id) =>{
    let deleteIndexUser = userStory.findIndex(userStory=> userStory.id === id);
    userStories.splice(deleteIndexUsert,1);
    showUserStories();

}