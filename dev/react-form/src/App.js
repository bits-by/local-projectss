import React from 'react'
import {useState} from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddress:"" , city:"" , state:"", postalCode:"", comments:"", candidates:"", offers:"", pushNotifications:""                                                           
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked : value}));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name </label>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Vivek"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
        />
        <br/> <br/>

        <label htmlFor="lastName">Last Name </label>
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Raut"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />

        <br/><br/>
        <label htmlFor="email">Email </label>
        <input 
        type="text"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        /> <br/><br/>

        <label htmlFor='country'>Country </label>
        <select
        id="country"
        name="country"
        value={formData.Country}
        onChange={changeHandler}
        className="outline"
        >


          <option>India</option>
          <option>United States</option>
          <option>UK</option>
          <option>Canada</option>
        </select> <br/><br/>

        <label htmlFor="streetAddress">Street Address  </label>
        <input 
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="address"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
        /> <br/><br/>

        <label htmlFor="city">City  </label>
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="city"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        /><br/><br/>


        <label htmlFor="state">State </label>
        <input 
        type="text"
        name="state"
        id="state"
        placeholder="state"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        /> <br/> <br/>

        <label htmlFor="postalCode">PostalCode </label>
        <input 
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="000000"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
        /> <br/><br/>
        
        <fieldset>
          <legend>By Email</legend>

          <div className='flex'>
            <input
            type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get Notified when someone post a comment on a posting...</p>
            </div>
          </div>

          <div className='flex'>
            <input
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get Notified when candidates apply for job..</p>
            </div>
          </div>

          <div className='flex'>
            <input
            type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someone accept or reject an offer... </p>
            </div>
          </div>
          
          
        </fieldset> <br/><br/>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are deliversesd via SMS to your mobile number</p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label> <br/>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label> <br/>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label> <br/>
        </fieldset>
        
        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
        

      </form>
    </div>
  )
}

export default App