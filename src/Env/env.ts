import Development from "./dev_env";
import Production from "./prod_env";

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
