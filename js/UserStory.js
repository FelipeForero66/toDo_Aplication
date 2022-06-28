class UserStory extends Data{
    static counterUserStories = 0;

    constructor(description){
        super(description);
        this._id = ++UserStory.counterUserStories;

    }

    get id(){
        return this._id;
    }
}