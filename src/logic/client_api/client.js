
export const requestApi = (endPoint="/",method,token='',requestBody)=>{

// let url = "https://dev.nonicoms.ng/api/v1/auth"

let url = "http://localhost"

    return new Promise(async(resolve,reject)=>{
        try {
            let response = await fetch(`${url}${endPoint}`,{
                headers:{
                    "Content-Type":"application/json",
                    'x-access-token':token
                },
                method:method,
                body: JSON.stringify(requestBody) 
            })
    
            let res = await response.json()
    
            if(!res){

                reject("error occured")

            }else{
                resolve(res)
            }
        } catch (error) {
            reject(error.message)
        }
      
    })
}