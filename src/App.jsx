import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const storageKeyName = 'count';
  
  // Retrieve the count value from localStorage, defaulting to 0 if not present
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName)) || 0;
  const [count, setCount] = useState(retrieveCountValue);

  // Synchronize count with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKeyName, count);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome User! 🎉</h1>
      <p>This is my cool React App.</p>
      <p style={{ color: 'tomato', fontWeight: 'bold', fontSize: '1.2rem' }}>Count Me</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        {`Count is ${count}`}
      </Button>
    </div>
  );
}

export default App;
