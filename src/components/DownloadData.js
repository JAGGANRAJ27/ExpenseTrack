import React from 'react'
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import Button from '@material-ui/core/Button';
import useStyles from '../styles';

const DownloadData = ({rootElementId,DownloadFileName}) => {
    const downloadFileDocument =()=>{
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p","pt","a4")
            pdf.addImage(imgData, "JPEG",10,50)
            pdf.save(`${DownloadFileName}`)
        })
    }
    const classes = useStyles();
  return (
    <div>
        <Button className={classes.downloadbtn} variant="outlined" onClick={downloadFileDocument}>Download Statement</Button>
    </div>
  )
}

export default DownloadData;