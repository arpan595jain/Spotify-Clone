import mongoose from "mongoose";

const albumSchema= new mongoose.Schema({
    name:{ type:String,reuired:true},
    desc:{ type:String,reuired:true},
    bgColour:{ type:String,reuired:true},
    image:{ type:String,reuired:true}

})
const albumModel= mongoose.models.album || mongoose.model("album",albumSchema);
export default albumModel;