"use server"
import {db} from "@config/db" 
export const contactAction = async (formData) => {
    
    const {fullName ,email ,message} = Object.fromEntries(formData.entries());
    await db.execute(`insert into contacts (full_name, email, message) values (?,?,?)`, [fullName, email, message]);
}