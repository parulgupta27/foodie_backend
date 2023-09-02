import Development from "./dev.env";
import Production from "./prod.env";

export interface Environment{
db_url:string,
}


export  function getCurrentEnvironment(){
if(process.env.Node_ENV=="production"){
return Production;
}
else{
    return Development;
}
}
