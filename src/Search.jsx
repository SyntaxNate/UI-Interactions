import { Button, Stack } from '@mui/material';
import React, {useState} from "react";
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

function App() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    function handleInputChange(e) {
        setQuery(e.target.value);
    }

    async function handleSearch() {
       setLoading(true);
       setError(null);

        try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const filtered = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);

    } catch (err) {
        console.log(err);
        setError("Could not fetch products.");
    }

    setLoading(false);

};

   

    return(
        <div style={{ padding: "2rem" }}>
            <p>Search Demo</p>

            {/* Search Bar (controlled by react state)*/}
            <input type="text" 
                   placeholder='Search Something'
                   value={query}
                   onChange={handleInputChange}
            />

            {/* Button (triggers search handler)*/}
            <MotionButton spacing={6}
             variant="contained"
             whileTap={{ scale:0.9 }}
             whileHover={{ y: -4 }}
             onClick={handleSearch}>
                Search
            </MotionButton>

            {/* Loading Feedback */}
            {loading && <p>0Loading...</p>}

            {/* Show Error */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Show results */}
            <ul>
                {results.map(product => (
                    <li key={product.id}>
                       {product.title} 
                    </li>
                ))}
            </ul>
        </div>
    );
}       

export default App;
