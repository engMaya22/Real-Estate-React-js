
import {useState, useEffect} from "react"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {localStorageUtil} from  "../utils/localStorageUtil"

const useContact = ()=>{
    const [result, setResult] = useState("");
    const [name, setName] = useState(() => localStorageUtil.get("name"));
    const [email, setEmail] = useState(() => localStorageUtil.get("email"));
    const [message, setMessage] = useState(() => localStorageUtil.get("message"));

    useEffect(() => {
    localStorageUtil.set("name", name);
    }, [name]);

    useEffect(() => {
    localStorageUtil.set("email", email);
    }, [email]);

    useEffect(() => {
    localStorageUtil.set("message", message);
    }, [message]);
   

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "57891215-da1c-4574-8cc5-5a0ba2605050");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        setName("");
        setEmail("");
        setMessage("");
        localStorage.removeItem("contact_name");
        localStorage.removeItem("contact_email");
        localStorage.removeItem("contact_message");
        } else {
        console.log("Error", data);
        setResult("");
        toast.error(data.message)
        }
    };
    return {
        onSubmit ,
        result ,
        name,
        email,
        message,
        setName,
        setEmail,
        setMessage


    }


}
export default useContact;