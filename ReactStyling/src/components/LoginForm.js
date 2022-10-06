import React,{useState} from 'react'

export default function LoginForm() {
const[Fname,setFname] = useState()
const[Lname,setLname] = useState()

    const FHandler = e =>{
const First = e.target.value
console.log(First)
    }
    const LHandler = e =>{
        const Last = e.target.value
        console.log(Last)
            }
    const submitingHandler = () =>{
setFname('')
setLname('')
    }
  return (
    <div>
      <div className="iphone">
        <header className="header">
          <h1>Checkout</h1>
        </header>

        <form className="Form" onSubmit={submitingHandler}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname"  placeholder="Your name.." value={Fname} onChange={FHandler} />
         
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={Lname} onChange={LHandler}/>
          
        <button className="button button--full" type="submit">Submit</button>
        </form>
      </div>
    </div>

  )
}
