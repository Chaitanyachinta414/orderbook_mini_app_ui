import React,{useState}from 'react';
import SearchResults from './SearchResults';
const Search = () => {
    
    let [columnName,setCloumnName]= useState("");
    let [columnValue,setCloumnValue]=useState("");
    let [searchRecords, setSearchRecords]= useState([])

    const handleSearch =(tableColumnName,tableColumnValue) => {
        fetch('http://localhost:8080/search?columnname='+tableColumnName+'&searchvalue='+tableColumnValue)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSearchRecords(data)
            })
    }
    const handlecancelSearch =() => {
        setCloumnValue("")
    }
    const handleOnChange = (e) => {
        setCloumnName(e.target.name);
        setCloumnValue(e.target.value);
    }
    return (
        <div className="container">
        <div className='table-wrapper'>

            <h1 className='header'>Search Orderbook Data Here</h1>
            <form className='Form-updated-data'>
                <div className="input-field-data">

                    <div>
                        <label>PO#: </label>
                        <input 
                            type="text" 
                            name="po" 
                            onChange={(e) =>handleOnChange(e)}
                        />
                    </div>
                    
                    <div>
                    <label  >Opportunity Description: </label>
                    <input
                        type="text"
                        name="opportunity_Description"
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Project Name: </label>
                    <input
                        type="text"
                        name='project_Name'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>

                    <div>
                    <label >Dev/IMP/Supp: </label>
                    <input

                        type="text"
                        name='dev_IMP_Supp'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>

                    <div>
                    <label >Technology: </label>
                    <input
                        type="text"
                        name='technology'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Customer Name: </label>
                    <input
                        type="text"
                        name='customer_Name'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Project vs Annuity: </label>
                    <input
                        type="text"
                        name='project_vs_Annuity'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Account Name: </label>
                    <input type="text"  name='account_Name'   onChange={(e) =>handleOnChange(e)}/>
                    </div>
                    
                    <div>
                    <label >PO Availability: </label>
                    <input
                        type="text"
                        name="po_Availability" 
                        onChange={(e) =>handleOnChange(e)}
                        /></div>

                    <div>
                    <label>PID: </label>
                    <input type="number"  name="pid"  onChange={(e) =>handleOnChange(e)} />
                    </div>
                </div>
                <button type="button" onClick={()=> handleSearch(columnName,columnValue)} className='update-btn'>Search</button>
                <button type="button" onClick={handlecancelSearch} className='cancel-btn'>Cancel</button>
            </form>
            {searchRecords?.length >0 ? <SearchResults SearchRecords={searchRecords} SetSearchRecords = {(newVal) => setSearchRecords(newVal)}/>:""}
        </div>

    </div>
    );
};

export default Search;