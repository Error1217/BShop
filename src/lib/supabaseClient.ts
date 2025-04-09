import type { ICartItem } from "@/Interface/ICartItem";
import { createClient } from "@supabase/supabase-js";
import type { UUID } from "crypto";

const supabaseUrl = "https://mmhsgdblorkqimuwoayb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1taHNnZGJsb3JrcWltdXdvYXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NjY4MzAsImV4cCI6MjA1NzQ0MjgzMH0.sQ0LrdOjhH9EcVVoCPO41-elmChgoKMIs54Ch9btdeE"

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * 新增 ---> 增刪查改
 * 
 */

export async function getProducts(columnName: string = "*") {
    try {
        const { data, error } = await supabase.from("Products").select(columnName);

        if (error) {
            throw new Error(error.message);
        }

        return data || [];

    } catch (error) {
        console.error(error);
        return []
    }
}

export async function getProduct(id: UUID, columnName: string = "*") {
    try {
        const { data, error } = await supabase.from("Products").select(columnName).eq("id", id).single();

        if (error) {
            throw new Error(error.message);
        }

        return data;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function getProductVariants(id: UUID, columnName: string = "*") {
    try {
        const { data, error } = await supabase.from("Product_Variants").select(columnName).eq("product_id", id);

        if (error) {
            throw new Error(error.message);
        }

        const arr = data.map((item) => {
            return item[columnName as any]
        });

        return arr || [];

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getSku(id: UUID, size: string) {
    try {
        const { data, error } = await supabase
            .from("Product_Variants")
            .select("sku")
            .eq("product_id", id).eq("size", size).single();

        if (error) {
            throw new Error(error.message);
        }

        return data["sku"];

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//儲存到購物車

export async function setCartItem(userId: UUID, cartItem: ICartItem) {

    try {

        const { data, error } = await supabase.from("Cart_Items").insert([{
            sku: cartItem.sku,
            userId: userId,
            name: cartItem.name,
            price: cartItem.price,
            quantity: cartItem.quantity,
            size: cartItem.size,
            image_url: cartItem.image_url
        }]);

        if (error) {
            throw new Error(error.message);
        }

        return data;

    } catch (error) {
        console.error("加入購物車失敗", error);
        return undefined;
    }
}

export async function removeCartItem(sku: string) {
    try {
        const { error } = await supabase.from("Cart_Items").delete().eq("sku", sku);
        
        if(error){
            throw new Error(error.message)
        }

        return true;

    } catch (error) {
        console.log("刪除失敗", error)
        return false;
    }
       
}

export async function updateCartItem(userId:UUID, sku:string, newData: any) {
    try {
        const { error } = await supabase.from("Cart_Items").update(newData).eq("sku", sku).eq("userId", userId);
        
        if(error){
            throw new Error(error.message)
        }

        return true;

    } catch (error) {
        console.log("更新數量失敗", error)
        return false;
    }
       
}

export async function getCartAllItem(userId: string) {
    try {
        const { data, error } = await supabase.from("Cart_Items").select().eq("userId", userId);

        if (error) {
            throw new Error(error.message);
        }
        data.sort((a, b)=>{ return a.id - b.id});

        return data;

    } catch (error) {
        console.error("獲取購物車失敗", error);
        return undefined;
    }
}