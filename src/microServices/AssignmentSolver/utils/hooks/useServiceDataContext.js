import { useContext } from "react";
import { ServiceDataContext } from "../contexts/serDataContext";



// Custom hook to access the StepContext
export function useServiceDataContext() {
    return useContext(ServiceDataContext);
}