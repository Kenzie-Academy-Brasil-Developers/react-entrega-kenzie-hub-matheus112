import { createContext } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const TechContexts = createContext({} as iCounterContext);

interface iCounterContextProps{
    children:React.ReactNode;
  }

  interface iCounterContext{
    deletOn:(id: string) => Promise<void>
    onSubmitForm:(id: iOnSubmitForm) => Promise<void>
  }

export  interface iDeleteOn{
    deletOn:string
    id:string
  }

export interface iOnSubmitForm  {
    title:string
    status:string
}

export default function TechProvider({ children }:iCounterContextProps) {

    async function deletOn(id:string) {
        await Api.delete(`/users/techs/${id}`).then((res) => {
            window.location.reload();
        });
    }
    async function onSubmitForm(data:iOnSubmitForm) {
        await Api.post("/users/techs", data)
            .then((res) => {
                window.location.reload();
            })
            .catch((_) => TechError());
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