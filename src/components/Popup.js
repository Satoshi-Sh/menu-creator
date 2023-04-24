import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Popup.css'
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react'
// import demo files 
import sushiya from '../menus/sushiya.json'
import italiano from "../menus/Italiano's.json"
import liquor from "../menus/Liquor Vendor.csv"
import Papa from 'papaparse'


// export file 
// from https://theroadtoenterprise.com/blog/how-to-download-csv-and-json-files-in-react
const downloadFile = ({ data, fileName, fileType },restaurant) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType })
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}


const exportToJson = (e,data,restaurant,image) => {
  e.preventDefault()
  let whole = {restaurant,image}
  whole['menu'] = data
  console.log(whole)
  downloadFile({
    data: JSON.stringify(whole),
    fileName: `${restaurant}.json`,
    fileType: 'text/json',
  }, restaurant)
}


function Popup(props) {
  const {text,show,setShow,menu,setMenu,restaurant,setRestaurant,image,setImage} = props
  const [selectedFile, setSelectedFile] = useState(null);
  const handleClose = () => setShow(false);
  let message = ''
  if (text==='Upload'){
    message = "Make a menu with your local file."
  }
  else {
    message = "Download the current menu as a JSON file."
  }

  const readFile = (e)=>{
    e.preventDefault()
   
    const fileName = selectedFile.name
    
    // Get the file extension

    const [restaurant,fileExtension] = fileName.split('.');
  
    let fileReader =new FileReader()
    
    
    fileReader.readAsText(selectedFile,"UTF-8")
    fileReader.onload = e => {
    const content = e.target.result;
    if (fileExtension==='csv'){
    const lines = content.split('\n');
    let categories = []
    // get all categories first
    for (let line of (lines.slice(1))){
    const [category,name,price,description] = line.split(',')
     if (!categories.includes(category)){
      categories.push(category)
     }
    }
    let menu = []
    // make object for each category
    for (let category of categories){
    const cat = {category,description:'',items:[]}
    for (let line of (lines.slice(1))){
      const [category2,name,price,description] = line.split(',')
      const item = {name,price:parseFloat(price),description:description.replace('\r',''),groups:[]} 
      if (category ===category2){
        cat.items.push(item)
       }
      }
      menu.push(cat)
    }
    setMenu(menu)
    setRestaurant(restaurant)
    // default image
    setImage("https://res.cloudinary.com/dmaijlcxd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1670714105/cld-sample-4.jpg")
  }
    else{
    const data = JSON.parse(content)
    setMenu(data['menu']);
    setRestaurant(data['restaurant'])
    setImage(data['image'])
    }
    handleClose()
  }
}
const readFile2=(e)=>{
  const value = e.target.elements[0].value
  e.preventDefault()
  let data;
  if (value==='liquor'){
    Papa.parse(liquor,{
      header:true,
      download:true,
      delimiter: ",",
      complete:function(results){
        // make an object for the menu
        const categories = []
        for (let item of results.data){
          if (!categories.includes(item.category)){
            categories.push(item.category)
          }
        }

        let menu = []
        // make object for each category
        for (let cat of categories){
        const categoryObj = {category:cat,description:'',items:[]}
        for (let item of results.data){
        const {category,name,price,description} = item
        const itemObj = {name,price:parseFloat(price),description:description,groups:[]} 
        if (cat ===category){
           categoryObj.items.push(itemObj)
       }
      }
      menu.push(categoryObj)
    }
    setMenu(menu)
    setRestaurant('Liqour Vendor')
    // default image
    setImage("https://res.cloudinary.com/dmaijlcxd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1670714105/cld-sample-4.jpg")
      }

    })
  }
  else{
      if (value=='italian') {
      data = italiano
      }
      else {
      data= sushiya
      }
      setMenu(data['menu']);
      setRestaurant(data['restaurant'])
      setImage(data['image'])
    }
    handleClose()
}


  const duSection = () =>{
    if (text=='Upload'){
      return (
      <>
      <div className='file-form'>
      <Form onSubmit={readFile}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control name='path' required type="file" accept='.json,.csv'
        onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </Form.Group>
      <Button className='m-3' variant="outline-info" type='submit'>
            Write
      </Button>
      </Form>
      </div>
      <hr/>
      <div className='file-form'>
      <Form onSubmit={readFile2}> 
      <Form.Label>Make a  menu with a demo file</Form.Label>
      <Form.Select aria-label="Default select example">
      <option value="liquor">Liquor Menu.csv</option>
      <option value="italian">Italian Menu.json</option>
      <option value="sushi">Sushi Menu.json</option>
      </Form.Select>
      <Button className='m-3' variant="outline-info" type='submit'>
            Write
      </Button>
      </Form>
      </div>
      </>
      )
    }
    return (
      <div className='file-form'>
      <Button className='m-5' variant="info" onClick={(e)=>exportToJson(e,menu,restaurant,image)}>
            Download
      </Button>
      </div>
    )
  }

  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{text} File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
           {duSection()}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Popup;