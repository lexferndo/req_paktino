import { useState } from 'react';
import './App.css'
import { IoMdArrowDropdown } from "react-icons/io";

const barang = [
  {
    kode : 1,
    nama : "Pensil"
  },
  {
    kode: 2,
    nama : "Pulpen"
  },
  {
    kode: 3,
    nama : "Penghapus"
  },
  {
    kode: 4,
    nama : "Penggaris"
  },
  {
    kode: 5,
    nama : "Spidol"
  },
  {
    kode: 6,
    nama : "Gunting"
  },
  {
    kode: 3,
    nama : "Penghapus"
  },
  {
    kode: 4,
    nama : "Penggaris"
  },
  {
    kode: 5,
    nama : "Spidol"
  },
  {
    kode: 6,
    nama : "Gunting"
  },
  {
    kode: 3,
    nama : "Penghapus"
  },
  {
    kode: 4,
    nama : "Penggaris"
  },
  {
    kode: 5,
    nama : "Spidol"
  },
  {
    kode: 6,
    nama : "Gunting"
  },
]

function App() {

  const [dropdown, setDropdown] = useState(false)
  const [value, setValue] = useState("")

  const findBarang = (value) => {
    let result = barang.find(e => e.kode === value )
    return `${result.kode} - ${result.nama}`
  }

  return (
    <div className='h-screen flex items-center justify-center bg-teal-500'>
        <div className='p-5 rounded-lg bg-white grid gap-4 shadow-md shadow-white'>

          <div className='grid gap-3'>
            <label htmlFor="periode" className='text-base font-medium text-teal-500'>Periode</label>
            <div className='flex items-center gap-5'>
              <div className='flex items-center gap-1'>
                <input type="radio" id='normal' name='periode' value="1" className=' w-3 h-3 rounded-full border border-teal-500' />
                <label htmlFor="normal" className='text-sm font-medium text-teal-500'>Periode Normal</label>
              </div>

              <div className='flex items-center gap-1'>
                <input type="radio" id='13' name='periode' value="2" className=' w-3 h-3 rounded-full border border-teal-500' />
                <label htmlFor="13" className='text-sm font-medium text-teal-500'>Periode 13</label>
              </div>

              <div className='flex items-center gap-1'>
                <input type="radio" id='14' name='periode' value="3" className=' w-3 h-3 rounded-full border border-teal-500' />
                <label htmlFor="14" className='text-sm font-medium text-teal-500'>Periode 14</label>
              </div>
            </div>
          </div>

          <div className='flex items-end gap-3'>
            <div className='relative'>
              <div className='grid gap-2'>
                <label htmlFor="nama" className='text-sm font-medium text-teal-500'>Pilih Kode Barang</label>
                <input type="text" id='nama' placeholder={`${value ? findBarang(value) : "Kode Barang"}`} className='p-2 rounded-md w-96 text-teal-500 text-sm border border-teal-500 placeholder:text-sm outline-teal-500' disabled/>
              </div>

              <div className={` absolute bg-teal-500 -bottom-[225px] w-full max-h-56 text-white text-sm font-medium py-2 px-3 rounded-t origin-top-left overflow-y-auto transition-all duration-300 ${dropdown ? 'scale-100' : 'scale-0'}`}>
              {barang.map((value, index) => {
                return(
                  <option value={value.kode} key={index} onClick={() => {
                    setValue(value.kode); 
                    setDropdown(false); 
                  }} className='cursor-pointer p-2 rounded-md hover:bg-white hover:text-teal-500'>{value.kode} - {value.nama}</option>
                )
              })}
            </div>
            </div>

            <button onClick={() => setDropdown(!dropdown)} className='p-2 border border-teal-500 flex items-center text-sm rounded-md text-teal-500 justify-between'>Kode Barang<IoMdArrowDropdown className={`transition-all duration-300 ${dropdown ? 'rotate-180' : 'rotate-0'}`}/> </button>
          
          </div>


          <div className='flex gap-5 items-center'>
            <div className='grid gap-2 w-full'>
              <label htmlFor="note" className='text-sm font-medium text-teal-500'>Pilih Tanggal Awal</label>
              <input id="note" placeholder='Note' type='date' className=' w-full text-teal-500 p-2 rounded-md border border-teal-500 text-sm placeholder:text-sm outline-teal-500'/>
            </div>

              <div className='grid gap-2 w-full'>
              <label htmlFor="note" className='text-sm font-medium text-teal-500'>Pilih Tanggal Akhir</label>
              <input id="note" placeholder='Note' type='date' className=' w-full text-teal-500 p-2 rounded-md border border-teal-500 text-sm placeholder:text-sm outline-teal-500'/>
            </div>
          </div>
          
          <button className='py-2 rounded-md bg-white text-teal-500 text-sm font-medium border border-teal-500 transition-all duration-500 hover:bg-teal-500 hover:text-white'>
            Simpan
          </button>
        </div>
    </div>
  )
}

export default App
