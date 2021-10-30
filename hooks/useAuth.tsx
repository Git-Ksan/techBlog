import { useCallback, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import { User } from "../types/api/user";

export const useAuth = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<Boolean>(false);

    const login = useCallback((id: string) => {
        axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( (res) => 
        {
            console.log(res.data);
            if(res.data)
            {
                router.push("/load/home");
            }else{
                alert("ユーザーがみつかりません。");
            }
        })
        .catch(()=> alert("ログインできません。")).finally(()=>setLoading(false));
        ;

    },[router]);
    return { login, loading }
}