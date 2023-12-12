import {useState,useRef} from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";


const OrderbookFileUpload = () =>{

    const [files, setFiles] = useState(null);
    let [success, setSuccess] = useState(false);
    let [error,setError] = useState(false);
    const inputFile = useRef(null); 

     const packFiles = (files)=> {
        const data = new FormData();
        if(files.length >1) {
            [...files].forEach((file, i) => {
                data.append(`files`, file)
            })
        }
        else {
            data.append(`files`, files[0])
        }
        
        return data
    }
    const handleSubmit= () => {
        if (files) {
            const data = packFiles(files)
            uploadFilesApi(data)
        }
        else {
            setError("Please upload the file")
            setSuccess(false)  
            inputFile.current.value = "";
        }
    }
     const uploadFilesApi =(data) =>{
        
        if (files) {
            fetch("http://localhost:8080/import", {
            method: "POST",
            body: data,
            }).then((res) => res.json())
            .then((data) => { 
                console.log(data)
                if(data.status === "success") {
                    setSuccess(data.message)
                    setError(false)
                    setFiles(null)
                    inputFile.current.value = "";
                }else {
                    setError(data.message)
                    setSuccess(false)
                    setFiles(null)
                    inputFile.current.value = "";
                }
            })
    
        } 
     }
        return (
            <div className="form-container">
                 <form className="form-data" encType="multipart/form-data">
                 <Link to="/referencedata" className="back-arrow">&laquo;</Link>
                 <div>
                     <div className="form-alignment">
                        <h3 className="title-alignment">Orderbook file upload here:</h3>
                        <input  ref={inputFile} type="file" multiple onChange={(e)=> setFiles(e.target.files)} className="file-uploader" name="file"/>
                        <button type="button" onClick={handleSubmit} className="upload-btn">Upload</button> 
                    </div>
                    {error ? (<span className="error-message">{error}</span>):(<span className="success-message">{success}</span>)}
                 </div>
                </form>
            </div>
        )
}

export default OrderbookFileUpload;