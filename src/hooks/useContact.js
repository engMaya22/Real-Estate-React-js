
import {useState} from "react"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useContact = ()=>{
    const [result, setResult] = useState("");

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
        } else {
        console.log("Error", data);
        setResult("");
        toast.error(data.message)
        }
    };
    return {
        onSubmit ,
        result

    }


}
export default useContact;