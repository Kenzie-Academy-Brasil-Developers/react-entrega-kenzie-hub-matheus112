import { createContext } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const TechContexts = createContext({});


export default function TechProvider({ children }) {

    async function deletOn(id) {
        await Api.delete(`/users/techs/${id}`).then((res) => {
            window.location.reload();
        });
    }
    async function onSubmitForm(data) {
        await Api.post("/users/techs", data)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => TechError());
    }
    const TechError = () =>
        toast.warning("Technologia já foi cadastrada!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    return (
        <TechContexts.Provider
            value={{
                deletOn,
                onSubmitForm
            }}
        >
            {children}
        </TechContexts.Provider>
    );
}