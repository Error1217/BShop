import { defineStore } from "pinia";
import type { AuthError, User as SupaBaseUser, Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabaseClient";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: null as SupaBaseUser | null,
            role: null as String | null,
            session: null as Session | null,
            error: null as AuthError | null

        }
    },
    actions: {
        async signUp(email: string, password: string): Promise<boolean> {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });

            this.user = data?.user || null;
            this.error = error;

            //添加權限
            if (this.user) {
                await supabase.from("User_Role").insert([{ "id": this.user.id, "role": "user" }]);
            }

            if (this.error) {
                console.log("註冊失敗");
                return false;
            }

            console.log("註冊成功");
            return true;

        },

        async signIn(email: string, password: string): Promise<boolean> {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            this.user = data?.user || null;
            this.error = error;

            if (this.error) {
                console.log("登入失敗");
                return false;
            }

            console.log("登入成功");
            await this.getRole();
            return true;

        },

        async signOut(): Promise<void> {
            const { error } = await supabase.auth.signOut();

            if (error) {
                console.log("登出失敗");
            } else {
                this.user = null;
                this.error = null;
                this.role = null;
                console.log("登出成功");
            }
        },

        async getRole(): Promise<void> {
            try{
                if (!this.user) {
                    const { data: { user } } = await supabase.auth.getUser();
                    this.user = user;
                }
    
                if(this.user){
                    const { data, error } = await supabase.from("User_Role").select("role").eq("id", this.user.id).single()
    
                    if(error) {
                        throw new Error(error.message);
                    }

                    this.role = data.role;
    
                }
            }
            catch (error){
                console.error(error);
            }
        }

    }

});