import React,{useState} from "react";

const Highlighter = () => {
  
  const [text, setText] = useState('')
  const [word, setWord] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  
  const handleChangeParagraph = event => {
    
    setText(event.target.value);
  };
  const handleChangeWord = event => {
    setWord(event.target.value);
  }; 
  const handleChangeCheck=()=>{      
      setCheckboxValue(!checkboxValue);      
  }

  return (
    <div className='main-input'>
      <textarea 
        data-testid="source-text" 
        value={text}
        onChange={handleChangeParagraph}
        />
      <input 
        data-testid="search-term" 
        value={word}
        onChange={handleChangeWord}
      />
      
      <div className='mesage-checkbox'>
        <p>case sensitive?</p>
        <input 
            type="checkbox" 
            data-testid="case-sensitive" 
            checked={checkboxValue}
            onChange={handleChangeCheck}            
        />
      </div>
      <div className='conditional-span-mark'>

      {
          (checkboxValue)
          ?
          (
            text.split(' ').map((x,index)=>(
            ((word && x.includes(word)) && <mark key={index/1000}>{x}</mark>) || (<span key={index}>{x}</span>)
        ))
        )
        :
          (
              text.split(' ').map((x,index)=>(
              ((word && (x.toLowerCase().includes(word) || x.toUpperCase().includes(word))) && <mark key={index/1000}>{x}</mark>) || (<span key={index}>{x}</span>)
          ))
          )
      }
      </div>
    </div>
  );
};

export default Highlighter;