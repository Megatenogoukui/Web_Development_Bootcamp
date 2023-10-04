import conf from "../conf/conf";
import { Client , Account ,ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    
    constructor(){
        this.client
                .setEndpoint(conf.appwrite_URL) // Your API Endpoint
                .setProject(conf.appwrite_project_ID); 
        this.account = new Account(this.client)
    }

    //Method for creating an account
    async createAccount({email ,password ,name}){
       try {
        const userAccount = await account.create(
            ID.unique(),
            email,
            password
        );
        if (userAccount){
            //login the user
            this.loginAccount({email , password})
        }
       }
       catch(err){
        console.log("Auth Error :: createAccount :" ,err)
       }
    }


    //Method for login the user
    async loginAccount({email , password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch(err){
            console.log("Auth Error :: loginAccount :" ,err)
        }
    }

    //Method for getting the current status of the user
    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(err){
            console.log("Auth Error :: getCurrentUser :" ,err)
        }
        return null
    }

    //Method for logout
    async logoutUser(){
        try{
            return await this.account.deleteSessions()
        }catch(err){
            console.log("Auth Error :: logoutAccount :" ,err)
        }
    }
}

//Creating a object of the class which we have created so that we can directly use all thwae methods
const authService = new AuthService()

export default authService;