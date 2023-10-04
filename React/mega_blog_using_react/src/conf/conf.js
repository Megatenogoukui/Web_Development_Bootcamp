const conf = {
    appwrite_URL : String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_database_ID : String(import.meta.env.VITE_DATABASE_ID),
    appwrite_collection_ID : String(import.meta.env.VITE_COLLECTION_ID),
    appwrite_project_ID : String(import.meta.env.VITE_PROJECT_ID),
    appwrite_bucket_ID : String(import.meta.env.VITE_BUCKET_ID),
}
export default conf