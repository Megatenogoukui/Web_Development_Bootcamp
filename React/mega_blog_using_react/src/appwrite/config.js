import conf from "../conf/conf";
import { Client,ID , Databases ,Query,Storage } from "appwrite";


export class Service{
    client = new Client()
    databases;
    bucket;
    
    constructor(){
        this.client
                .setEndpoint(conf.appwrite_URL) // Your API Endpoint
                .setProject(conf.appwrite_project_ID); 
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
            }
    
    //Method for adding data into database
    async createPost({title , content , slug , featuredImage ,status ,userId}){
        try {
            await this.databases.createDocument(
                conf.appwrite_database_ID ,
                conf.appwrite_collection_ID ,
                slug ,
                {
                title,
                content,
                featuredImage,
                status,
                userId
            }) 
        } catch (error) {
            console.log("Service Error : Create Post: " ,error)
        }
    } 

    //Method for updating data into database
    async updatePost(slug ,{title , content , featuredImage ,status ,userId}){
        try {
            await this.databases.updateDocument(
                conf.appwrite_database_ID ,
                conf.appwrite_collection_ID ,
                slug ,
                {
                title,
                content,
                featuredImage,
                status,
                userId
            }) 
        } catch (error) {
            console.log("Service Error : Update Post: " ,error)
        }
    } 
    
    //Method for deleting data into database
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwrite_database_ID ,conf.appwrite_collection_ID , slug)
            return true
        } catch (error) {
            console.log("Service Error : Delete Post: " ,error)
            return false
        }
    }

    //Method for getting a single document
    async getSinglePost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
                slug
            )
        } catch (error) {
            console.log("Service Error : Get Single Post: " ,error)
            return false
        }
    }

    //Method for getting a All document
    async getAllPost(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
                queries
            )
        } catch (error) {
            console.log("Service Error : Get All Post: " ,error)
            return false
        }
    }


    //Methods of Storage

    //Method for uploading file
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwrite_bucket_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Service Error : Upload File: " ,error)
            return false
        }
    }

    //Method for deleting file
    async uploadFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwrite_bucket_ID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Service Error : Delete File: " ,error)
            return false
        }
    }

    //Method for getting file preview
    async previewFile(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwrite_bucket_ID,
                fileId
            )
            
        } catch (error) {
            console.log("Service Error : Preview File: " ,error)
            return false
        }
    }
}

const service = new Service()

export default service