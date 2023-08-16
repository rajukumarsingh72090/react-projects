import './App.css';
import Header from './components/header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
function App() {

  const  [name, setName] = useState()
  const  [email, setEmail] = useState()
  const [data, setData] = useState([])
  
  const addData =() =>{
    setData([...data, {name, email}])
    setName("")
    setEmail("")
  }

  const removeItem = (index) =>{
    let arr = data
    arr.splice(index,1)
    setData([...arr])
  }

  return (
    <div className="App">
      <Header/>
      {/* form section */}
      <div className='form'>
      <Stack spacing={2} direction="row">
      <TextField value={name} onChange={(event) =>setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
      <TextField value={email} onChange={(event) =>setEmail(event.target.value)} id="outlined-basic" label="email" variant="outlined" />
      <Button onClick={addData} variant="contained" color='success'>
        <AddCircleIcon/>
      </Button>
       </Stack>
      </div>
      {/* data section */}
      <div className='data'>
        {
          data.map((element, index) => {
            return(
              <div key={index} className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <h4>
             <Button onClick={() => removeItem(index)} variant="contained" color='error'>
             <DeleteIcon/>
             </Button>
               </h4>
          </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
