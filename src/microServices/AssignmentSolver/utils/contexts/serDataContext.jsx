import { createContext, useEffect, useState } from "react";


// Create a ServiceDataContext
export const ServiceDataContext = createContext();


// StepProvider component to wrap the app with the serviceDataContext
export function ServiceDataProvider({ children }) {
    // Data for Take Assignment | Step 1
    const [takeAssignment, setTakeAssignment] = useState(null)
    useEffect(() => {
        // request server for Req Data Dependencies
        setTakeAssignment({
            text: {
                tokenSize : 5000,
            },
            file: {
                fileSize :5 * 1024 * 1024,
                allowedTypes :{
                    "application/pdf": [".pdf"],
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx", "doc"],
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".ppt"],
                }
            }
        })
    }, [])
    // Value object to be provided by the context
    const values = {takeAssignment};

    return <ServiceDataContext.Provider value={values}>{children}</ServiceDataContext.Provider>;
}