import React, { useState } from 'react'
import OutputScreen from './OutputScreen'
import Button from './Button'

const Calculator = () => {
    const [question,setQuestion]=useState("");
    const [answer,setAnswer]=useState("")

    const handleClick=(e)=>{
 
        const value = e.target.value;
       
        switch (value) {
          case '=': {
       
            // if it's an equal sign, use the eval module to evaluate the question ,convert the answer (in number) to String
            if (question!=='')
            {
                var ans='';
                  try
                    {
                        ans = eval(question);
                    }
                    catch(err)
                    {
                        setAnswer( "Math Error");
                    }
                    if (ans===undefined)
                    setAnswer("Math Error");
       
                    // update answer in our state.
                    else
                    setAnswer( ans );
                    setQuestion('')
                    break;
                }
          }
          case 'C': {
       
            // if it's the C sign, just clean our question and answer in the state
            setAnswer("");
            setQuestion('')
            break;
          }
       
          
       
        default: {
       
            // for every other command, update the answer in the state
            let qs=question+value
            setQuestion(qs)
            break;
          }
        }
      }

  return (
    <div className='container'>

<div className="frame1">
<div className="heading"><h1>Calculator</h1></div>
    <div class="mainCalc">
        <div className='button-row1'>
        <OutputScreen question={question} answer={answer} />
        <Button handleClick={handleClick} label={'C'}/>

        </div>
  
    <div className="button-row">
      <Button  handleClick={handleClick} label={'1'}/>
      <Button handleClick={handleClick} label={'2'}/>
      <Button handleClick={handleClick} label={'3'}/>
      <Button handleClick={handleClick} label={'/'}/>
    </div>
   
    <div className="button-row">
      <Button handleClick={handleClick} label={'4'}/>
      <Button handleClick={handleClick} label={'5'}/>
      <Button handleClick={handleClick}label={'6'}/>
      <Button handleClick={handleClick} label={'-'}/>
    </div>
    <div className="button-row">
      <Button handleClick={handleClick} label={'7'}/>
      <Button handleClick={handleClick} label={'8'}/>
      <Button handleClick={handleClick} label={'9'}/>
      <Button handleClick={handleClick} label={'+'}/>
    </div>
    
    <div className="button-row">
    <Button handleClick={handleClick} label={'.'}/>
      <Button handleClick={handleClick} label={'0'}/>
      <Button handleClick={handleClick} label={'='}/>
      <Button handleClick={handleClick} label={'*'}/>

    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Calculator