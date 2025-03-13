import { useEffect } from "react";

export default function useScrollToView() {
    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1)); // Remove '#' from hash
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: 'center' });
                }

            }, 0);

        }
    }, []);
}