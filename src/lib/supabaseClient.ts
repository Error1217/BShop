import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mmhsgdblorkqimuwoayb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1taHNnZGJsb3JrcWltdXdvYXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NjY4MzAsImV4cCI6MjA1NzQ0MjgzMH0.sQ0LrdOjhH9EcVVoCPO41-elmChgoKMIs54Ch9btdeE"

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * 新增 ---> 增刪查改
 * 
 */

export async function getProducts() {
    try {
        const { data, error } = await supabase.from("Products").select();

        if (error) {
            throw new Error(error.message);
        }

        return data || [];

    } catch (error) {
        console.error(error);
        return []
    }
}

export const getProduct = () => {

}