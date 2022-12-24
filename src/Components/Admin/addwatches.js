import {React, useState} from 'react';
import { MDBInput, MDBTextArea, MDBBtn, MDBFile } from 'mdb-react-ui-kit';
import {AddWatch} from '../../redux/actions/watchesaction';
import '../../css/admin/addwatches.css';
import { useDispatch } from 'react-redux/es/exports';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export const Addwatches = (props) => {
    const [open, setOpen] = useState(false);
    const [brand,setBrand] = useState('');
    const [model,setModel] = useState('');
    const [price,setPrice] = useState();
    const [desc,setDesc] = useState('');
    const [strap,setStrap] = useState('');
    const [sex,setSex] = useState('');
    const [shape,setShape] = useState('');
    const [type,setType] = useState('');
    const [img,setImg] = useState('');
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if( props.watch_id !== undefined || props.watch_id !== null){

    //     }
    
    // }, []);
    
  
    const handleClose = () => {
        setOpen(false);
        props.toggleShow();
    };

    const handleSubmit = () =>{
        const data = {
            'brand_name': brand,
            'model_name': model,
            'price': price,
            'description': desc,
            'strap_type': strap,
            'gender': sex,
            'shape': shape,
            'type': type,
            'image_url': img
        }
        console.log(data);
        dispatch(AddWatch(data));
        setOpen(true);
    }

    return(
        <div>
            <p>Product Info</p>
            <MDBInput label='Brand Name' id='typeText' type='text' onChange={e => setBrand(e.target.value)} /><br/>
            <MDBInput label='Model Name' id='typeText' type='text' onChange={e => setModel(e.target.value)}/><br/>
            <MDBInput label='Price' id='typeText' type='number' onChange={e => setPrice(e.target.value)}/><br/>
            <MDBTextArea label='Description' id='textAreaExample' rows={4} onChange={e => setDesc(e.target.value)}/> <br/>
            {/* <label>
                Strap type
                <select value={strap} onChange={e => setStrap(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="rubber">Rubber</option>
                    <option value="steel">Steel</option>
                </select>
            </label>&nbsp;&nbsp;&nbsp;&nbsp; */}
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Strap Type</InputLabel>
                <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={strap}
                onChange={e => setStrap(e.target.value)}
                label="Strap Type"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="rubber">Rubber</MenuItem>
                <MenuItem value="steel">Steel</MenuItem>
                </Select>
                </FormControl>
               

                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">Gender</InputLabel>
                <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sex}
                onChange={e => setSex(e.target.value)}
                label="Gender"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="female">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
                <MenuItem value="unisex">Unisex</MenuItem>
                </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">Shape</InputLabel>
                <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={shape}
                onChange={e => setShape(e.target.value)}
                label="Shape"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="round">Round</MenuItem>
                <MenuItem value="square">Square</MenuItem>
                </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
                <InputLabel id="demo-select-small">Watch Type</InputLabel>
                <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={type}
                onChange={e => setType(e.target.value)}
                label="Watch type"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="analog">Analog</MenuItem>
                <MenuItem value="digital">Digital</MenuItem>
                <MenuItem value="analog-digital">Analog-Digital</MenuItem>
                <MenuItem value="smartwatch">Smartwatch</MenuItem>
                </Select></FormControl>
                </div><br />

                <MDBFile label='Upload the photos or videos of the watch.' id='customFile' /><br />
                <div className="d-grid gap-2">
                <Button style={{backgroundColor: '#1e3c71'}}  variant="contained" size="medium" onClick={handleSubmit}>
                     Add Product
                </Button>
            </div>


            {/* modal to confirm logout. */}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"The product has been added successfully."}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>OK.</Button>
        </DialogActions>
      </Dialog>


        </div>
    );
};