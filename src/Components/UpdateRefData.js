import './../App.css'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';



const UpdateRefData = () => {

    const navigate = useNavigate();

    const [editedRow, setEditedrow] = useState({});

    useEffect(() => {
        let tempStr = localStorage.getItem("EditedData");
        let tempObj = JSON.parse(tempStr);
        setEditedrow(tempObj);
    }, []);

    const handleChange = (e) => {
        setEditedrow({
            ...editedRow,
            [e.target.name]: e.target.value
        })
    }
    const handleUpdate = () => {
        fetch("http://localhost:8080/updateOrderbook",
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedRow)
            })
            .then((res) => res.json())
            .then((data) => {
                setEditedrow(data)
                let objValue = JSON.stringify(data)
                localStorage.setItem("EditedData", objValue);
                navigate(-1)
            })

    };
    const handlecancelRow = () => {
        navigate('/referencedata')
    }
    return (
        <div className="container">
            <div className='table-wrapper'>

                <h1 className='header'>Orderbook - Update data</h1>
                <form className='Form-updated-data'>
                    <div className="input-field-data">

                        <div>
                            <label>Del IBU: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.del_IBU || ''} 
                                onChange={handleChange} 
                                name="del_IBU" 
                            />
                        </div>
                        
                        <div>
                        <label  >Sales IBU: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.sales_IBU || ''}
                            onChange={handleChange}
                            name="sales_IBU"
                        /></div>
                        
                        <div>
                        <label >Sales IBU Head: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.sales_IBU_Head ||''}
                            onChange={handleChange}
                            name='sales_IBU_Head'
                        /></div>

                        <div>
                        <label >Del IBU Head: </label>
                        <input

                            type="text"

                            defaultValue={editedRow.del_IBU_Head || ''}

                            name='del_IBU_Head'
                            onChange={handleChange}
                        /></div>

                        <div>
                        <label >Opportunity Description: </label>
                        <input
                            type="text"
                            title={editedRow.opportunity_Description || ''}
                            defaultValue={editedRow.opportunity_Description || ''}
                            name='opportunity_Description'
                            onChange={handleChange}
                        /></div>
                        
                        <div>
                        <label >Customer Name: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.customer_Name || ''}
                            name='customer_Name'
                            onChange={handleChange}
                        /></div>
                        
                        <div>
                        <label >OpportunityID: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.opportunity_ID || ''}
                            name='opportunity_ID'
                            onChange={handleChange}
                        /></div>
                        
                        <div>
                        <label >PO#: </label>
                        <input type="number" defaultValue={editedRow.po || ''} name='po'  onChange={handleChange}/>
                        </div>
                        
                        <div>
                        <label >PO Availability: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.po_Availability || ''}
                            name="po_Availability"
                        onChange={handleChange} /></div>

                        <div>
                        <label>PID: </label>
                        <input type="number" defaultValue={editedRow.pid || ''} name="pid" onChange={handleChange} />
                        </div>

                        <div>
                        <label>Project Name: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.project_Name || ''}
                            name='project_Name'
                            onChange={handleChange} /></div>

                        <div>
                        <label>TML#: </label>
                        <input type="text" defaultValue={editedRow.tml || ''}  name='tml' onChange={handleChange} /></div>

                        <div>
                        <label>Account Name: </label>
                        <input

                            type="text"

                            defaultValue={editedRow.account_Name || ''}  
                            name='account_Name' 
                            onChange={handleChange} /></div>

                        <div>
                        <label>Digital Flag: </label>
                        <input

                            type="text"

                            defaultValue={editedRow.digital_Flag || ''} 
                            name='digital_Flag' 
                            onChange={handleChange} /></div>
                        <div>
                            <label> Project vs Annuity: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.project_vs_Annuity || ''} 
                                onChange={handleChange} 
                                name="project_vs_Annuity" 
                            />
                        </div>
                        <div> 
                        <label>Head Wind/Tail Wind: </label>
                        <input

                            type="text"

                            defaultValue={editedRow.headwind_Tailwind || ''}  
                            name='headwind_Tailwind'     
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Dev/IMP/Supp: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.dev_IMP_Supp || ''}
                            name='dev_IMP_Supp'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Technology: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.technology || ''}
                            name='technology'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Competency: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.competency || ''}
                            name='competency'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Pillar: </label>
                        <input 
                            type="text" 
                            title={editedRow.pillar || ''}
                            defaultValue={editedRow.pillar || ''} 
                            name="pillar" 
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>vertical Name: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.vertical_Name || '' }
                            name="vertical_Name"
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>GE/Non GE: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.ge_NonGE || ''}
                            name='ge_NonGE'
                            onChange={handleChange} /></div>

                        <div>
                        <label>Status as Per CASUM:</label>
                        <input
                            type="text"
                            defaultValue={editedRow.status_CASUM || ''}
                            name='status_CASUM'
                        onChange={handleChange} /></div>
                        
                        <div>
                        <label>PM: </label>
                        <input type="text" defaultValue={editedRow.pm || ''} name='pm' onChange={handleChange} /> </div>

                        <div>
                        <label>PGM: </label>
                        <input type="text" defaultValue={editedRow.pgm || ''}  name='pgm' onChange={handleChange} /> </div>

                        <div>
                        <label>BRM: </label>
                        <input type="text" defaultValue={editedRow.brm || ''} name='brm' onChange={handleChange} /> </div>

                        <div>
                        <label>CDM/L2: </label>
                        <input type="text" defaultValue={editedRow.cdm_L2 || ''} name='cdm_L2' onChange={handleChange} /> </div>

                        <div>
                        <label>Business:</label>
                        <input
                            type="text"
                            defaultValue={editedRow.business || ''}
                            name='business'
                            onChange={handleChange} /></div>

                        <div>
                        <label>Sub Business: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.sub_business || ''}
                            name='sub_business'
                            onChange={handleChange} /></div>


                        <div>
                        <label>Total Contract Amount in USD: </label>
                        
                        <input
                            type="text"
                            defaultValue={editedRow.total_Contract_Amount_in_USD || ''}
                            name='total_Contract_Amount_in_USD'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>PO Currency:</label>
                        <input
                            type="text"
                            defaultValue={editedRow.po_Currency || ''}
                            name='po_Currency'
                            onChange={handleChange} /></div>

                        <div>
                        <label>End Date: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.end_date || ''}
                            name='end_date'
                            onChange={handleChange} /></div>

                        <div>
                        <label>Unbilled Amount: </label>
                        <input
                            type="text"
                            defaultValue={editedRow.unbilled_Amount || ''}
                            name='unbilled_Amount'
                            onChange={handleChange} /></div>
                             <div>
                            <label> Apr_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.apr_23 || ''} 
                                onChange={handleChange} 
                                name="apr_23" 
                            />
                        </div>
                        <div>
                            <label> May_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.may_23 || ''} 
                                onChange={handleChange} 
                                name="may_23" 
                            />
                        </div>
                        <div>
                            <label> Jun_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.jun_23 || ''} 
                                onChange={handleChange} 
                                name="jun_23" 
                            />
                        </div>
                        <div>
                            <label> q1_24_net: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.q1_24_net || ''} 
                                onChange={handleChange} 
                                name="q1_24_net" 
                            />
                        </div>
                        <div>
                            <label> Jul_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.jul_23 || ''} 
                                onChange={handleChange} 
                                name="jul_23" 
                            />
                        </div>
                        <div>
                            <label> Aug_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.aug_23 || ''} 
                                onChange={handleChange} 
                                name="aug_23" 
                            />
                        </div>
                        <div>
                            <label> Sep_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.sep_23 || ''} 
                                onChange={handleChange} 
                                name="sep_23" 
                            />
                        </div>
                        <div>
                            <label> q2_24_net: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.q2_24_net || ''} 
                                onChange={handleChange} 
                                name="q2_24_net" 
                            />
                        </div>
                        <div>
                            <label> Oct_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.oct_23 || ''} 
                                onChange={handleChange} 
                                name="oct_23" 
                            />
                        </div>
                        <div>
                            <label> Nov_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.nov_23 || ''} 
                                onChange={handleChange} 
                                name="nov_23" 
                            />
                        </div>
                        <div>
                            <label> Dec_23: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.dec_23 || ''} 
                                onChange={handleChange} 
                                name="dec_23" 
                            />
                        </div>
                        <div>
                            <label> q3_24_net: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.q3_24_net || ''} 
                                onChange={handleChange} 
                                name="q3_24_net" 
                            />
                        </div>
                        <div>
                            <label> Jan_24: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.jan_24 || ''} 
                                onChange={handleChange} 
                                name="jan_24" 
                            />
                        </div>
                        <div>
                            <label> Feb_24: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.feb_24 || ''} 
                                onChange={handleChange} 
                                name="feb_24" 
                            />
                        </div>
                        <div>
                            <label> Mar_24: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.mar_24 || ''} 
                                onChange={handleChange} 
                                name="mar_24" 
                            />
                        </div>
                        <div>
                            <label> q4_24_net: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.q4_24_net || ''} 
                                onChange={handleChange} 
                                name="q4_24_net" 
                            />
                        </div>
                        <div>
                            <label> fy_23_24: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.fy_23_24 || ''} 
                                onChange={handleChange} 
                                name="fy_23_24" 
                            />
                        </div>
                        <div>
                            <label> remarks: </label>
                            <input 
                                type="text" 
                                defaultValue={editedRow?.remarks || ''} 
                                onChange={handleChange} 
                                name="remarks" 
                            />
                        </div>
                    </div>
                    <button type="button" onClick={handleUpdate} className='update-btn'>Update</button>
                    <button type="button" onClick={handlecancelRow} className='cancel-btn'>Cancel</button>
                </form>
            </div>

        </div>

    );

}



export default UpdateRefData





