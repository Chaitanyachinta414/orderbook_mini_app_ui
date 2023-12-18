import './../App.css'
import React, { useState } from 'react'
import Pagination from './Pagination';
import { FaFileCsv,FaFilePdf  } from "react-icons/fa6";
import { RiFileExcel2Fill } from "react-icons/ri";



const SearchResults = ({SearchJSON,SearchDisplayRecords,SetSearchDisplayRecords}) => {
    const [currentPage, setCurrentPage]= useState(1);
    const [recordsPerPage]= useState(10);  


const handlePdfExport =() => {
    fetch("http://localhost:8080/pdf",
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(SearchJSON)
    })
    .then((res) => res.blob())
    .then((pdfBlob) => {
        // Create a Blob URL for the PDF
        const url = window.URL.createObjectURL(pdfBlob);
    
        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'OrderBook-pdf.pdf';
        document.body.appendChild(a);
    
        // Trigger a click on the link to start the download
        a.click();
    
        // Remove the link from the document
        document.body.removeChild(a);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const handleCsvExport =() => {
    fetch("http://localhost:8080/export/csv",
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(SearchJSON)
    })
    .then((res) => res.text())
    .then((csvData) => {
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        
        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'OrderBook_data_csv.csv';
        document.body.appendChild(a);
        
        // Trigger a click on the link to start the download
        a.click();
        
        // Remove the link from the document
        document.body.removeChild(a);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const handleExcelExport =() => {
    fetch("http://localhost:8080/excel",
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(SearchJSON)
    })
    .then((res) => res.blob())
    .then((excelBlob) => {
        // Create a Blob URL for the Excel file
        const url = window.URL.createObjectURL(excelBlob);
    
        // Create an anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'OrderBook_data_excel.xlsx'; 
    
        // Append the anchor element to the document body
        document.body.appendChild(a);
    
        // Trigger a click on the anchor element to initiate the download
        a.click();
    
        // Remove the anchor element from the document
        document.body.removeChild(a);
    
        // Revoke the Blob URL to release resources
        window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

//Get Current Page 

const indexOfLastOrderBook= currentPage * recordsPerPage;
const indexOfFirstOrderBook= indexOfLastOrderBook - recordsPerPage;

//Get the sliced data to records per page for UI 
const currentOrderBooks= SearchDisplayRecords?.slice(indexOfFirstOrderBook, indexOfLastOrderBook);

//To get the num of pages as per the records shown
const numberOfPages= Math.ceil(SearchDisplayRecords.length/recordsPerPage);

const handlePrevPage =() => {
    if(currentPage >1){
        setCurrentPage(currentPage - 1);
        }   

 }
 const handleNextPage =() => {
    if (currentPage < numberOfPages) {
        setCurrentPage(currentPage + 1);
        }
    
 }
    return (
        <div className="container">
        <div className='table-wrapper'>
            <div className='export-icons-adj'>
                <span className='pdf-icon'  title="PDF Download" onClick={handlePdfExport}><FaFilePdf /></span>
                <span className='csv-icon' title="CSV Download" onClick={handleCsvExport}><FaFileCsv /></span>
                <span className='excel-icon' title="Excel Download" onClick={handleExcelExport}><RiFileExcel2Fill /></span>
            </div>
    {SearchDisplayRecords?.length >0 ?
            (<table className='table'>

                <thead>
                    <tr>
                        <th className='thead-id'>ID</th>
                        <th >Del IBU </th>
                        <th >Sales IBU </th>
                        <th >Sales IBU Head </th>
                        <th >Del IBU Head </th>
                        <th >Opportunity Description </th>
                        <th >Customer Name </th>
                        <th>Opportunity ID</th>
                        <th >PO#</th>
                        <th>PO Availability</th>
                        <th >PID</th>
                        <th >Project Name</th>
                        <th>TML#</th>
                        <th>Account Name</th>
                        <th>Digital Flag</th>
                        <th >Project vs Annuity</th>
                        <th >Head Wind/Tail Wind</th>
                        <th >Dev / IMP / Supp </th>
                        <th >Technology</th>
                        <th >Competency</th>
                        <th >Pillar</th>
                        <th>Vertical Name</th>
                        <th>GE/Non GE</th>
                        <th >Status as per CASUM </th>
                        <th >PM </th>
                        <th >PGM</th>
                        <th >BRM </th>
                        <th>CDM/L2 </th>
                        <th >Business
                        </th>
                        <th >Sub business </th>
                        <th>Total Contract Amount in USD</th>
                        <th>PO Curency</th>
                        <th >End Date</th>
                        <th>Unbilled Amount (Excluding POC + JV)</th>
                        <th>Apr-23</th>
                        <th>May-23</th>
                        <th>Jun-23</th>
                        <th>Q1-24_Net</th>
                        <th>Jul-23</th>
                        <th>Aug-23</th>
                        <th>Sept-23</th>
                        <th>Q2-24_Net</th>
                        <th>Oct-23</th>
                        <th>Nov-23</th>
                        <th>Dec-23</th>
                        <th>Q3-24_Net</th>
                        <th>Jan-24</th>
                        <th>Feb-24</th>
                        <th>Mar-24</th>
                        <th>Q4-24_Net</th>
                        <th>FY(23-24)</th>
                        <th>Remarks</th>

                    </tr> 

                </thead>

                <tbody>
                
                    {currentOrderBooks.map((item,key) => (
                        <tr className='truncate' key={key}>

                            <td className='tdata-id'>{item.id}</td>

                            <td title={item.del_IBU} >{item.del_IBU}</td>

                            <td title={item.sales_IBU} >{item.sales_IBU}</td>

                            <td title={item.sales_IBU_Head} >{item.sales_IBU_Head}</td>

                            <td title={item.del_IBU_Head} >{item.del_IBU_Head}</td>

                            <td title={item.opportunity_Description} >{item.opportunity_Description}</td>

                            <td title={item.customer_Name} >{item.customer_Name}</td>

                            <td title={item.opportunity_ID} >{item.opportunity_ID}</td>

                            <td title={item.po} >{item.po}</td>

                            <td title={item.po_availability} >{item.po_availability}</td>

                            <td title={item.pid} >{item.pid}</td>

                            <td title={item.project_Name} >{item.project_Name}</td>

                            <td title={item.tml} >{item.tml}</td>

                            <td title={item.account_Name} >{item.account_Name}</td>

                            <td title={item.digital_Flag} >{item.digital_Flag}</td>

                            <td title={item.project_vs_Annuity} >{item.project_vs_Annuity}</td>

                            <td title={item.headwind_Tailwind} >{item.headwind_Tailwind}</td>

                            <td title={item.dev_IMP_Supp} >{item.dev_IMP_Supp}</td>

                            <td title={item.technology} >{item.technology}</td>

                            <td title={item.competency} >{item.competency}</td>

                            <td title={item.pillar} >{item.pillar}</td>

                            <td title={item.vertical_Name} >{item.vertical_Name}</td>

                            <td title={item.ge_nonGE} >{item.ge_nonGE}</td>

                            <td title={item.status_CASUM} >{item.status_CASUM}</td>

                            <td title={item.pm} >{item.pm}</td>

                            <td title={item.pgm} >{item.pgm}</td>

                            <td title={item.brm} >{item.brm}</td>

                            <td title={item.cdm_L2} >{item.cdm_L2}</td>

                            <td title={item.business} >{item.business}</td>

                            <td title={item.sub_business} >{item.sub_business}</td>

                            <td title={item.total_Contract_Amount_in_USD} >{item.total_Contract_Amount_in_USD}</td>

                            <td title={item.po_Currency} >{item.po_Currency}</td>

                            <td title={item.end_date} >{item.end_date}</td>

                            <td title={item.unbilled_Amount} >{item.unbilled_Amount}</td>

                            <td title={item.apr_23} >{item.apr_23}</td>

                            <td title={item.may_23} >{item.may_23}</td>

                            <td title={item.jun_23} >{item.jun_23}</td>

                            <td title={item.q1_24_net} >{item.q1_24_net}</td>

                            <td title={item.jul_23} >{item.jul_23}</td>

                            <td title={item.aug_23} >{item.aug_23}</td>

                            <td title={item.sep_23} >{item.sep_23}</td>

                            <td title={item.q2_24_net} >{item.q2_24_net}</td>

                            <td title={item.oct_23} >{item.oct_23}</td>

                            <td title={item.nov_23} >{item.nov_23}</td>

                            <td title={item.dec_23} >{item.dec_23}</td>

                            <td title={item.q3_24_net} >{item.q3_24_net}</td>

                            <td title={item.jan_24} >{item.jan_24}</td>

                            <td title={item.feb_24} >{item.feb_24}</td>

                            <td title={item.mar_24} >{item.mar_24}</td>

                            <td title={item.q4_24_net} >{item.q4_24_net}</td>

                            <td title={item.fy_23_24} >{item.fy_23_24}</td>

                            <td title={item.remarks} >{item.remarks}</td>

                       </tr>
                    ))}

                </tbody>
             </table>):(<h2 className='data-error'>No Records Found</h2>)
}
        </div>
        {SearchDisplayRecords.length >10 ? (<Pagination currentPage={currentPage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage}/>):""}
    </div>
    );

}

 

export default SearchResults

 

 

 