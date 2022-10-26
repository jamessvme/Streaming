import { isAuthenticated, isAuthenticating } from "$lib/store/authenticate";
import { current_user } from "$lib/store/user";
import axios from "axios";
import { env } from '$env/dynamic/public';
import { toasts }  from "svelte-toasts";

const verify = async () => {
    try {
        let access_token = "";
        if (typeof localStorage !== 'undefined') {
            access_token = localStorage.getItem("access_token") as string;
        }
        isAuthenticating.set(true);

        const response = await axios.post(`${env.PUBLIC_FLOGRAM_API_URL}/auth/verify`, { token: access_token });

        isAuthenticating.set(false);
        isAuthenticated.set(true);
        current_user.set(response.data);
    } catch (error: any) {
        if(error.response.data.statusCode == 400) {
            toasts.add({
                title: 'Verify Failed!',
                description: `${error.response.data.message}`,
                duration: 3000, // 0 or negative to avoid auto-remove
                placement: 'bottom-right',
                showProgress: true,
                type: 'warning',
                theme: 'dark',
                onClick: () => {},
                onRemove: () => {},
            });
        }

        if(typeof window !== 'undefined' && !window.location.href.includes("auth/signin"))
        {
            console.log("signin");
            window.location.href = "/app/auth/signin";
        }

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem("access_token", "");
        }
        isAuthenticated.set(false);
        isAuthenticating.set(false);
    }
}

export const load = () => {
    if(typeof window !== 'undefined' && !window.location.href.includes("auth") && window.location.href.includes("app"))
        verify();
}