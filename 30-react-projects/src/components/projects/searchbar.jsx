import { useState, useEffect } from "react";

const SearchBar = () => {

    // State for the search input value
    const [input, setInput] = useState(""); 

    // State to store the search results
    const [results, setResults] = useState([]);

    // State to control whether to show/hide the results dropdown
    const [showRes, setShowRes] = useState(false);

    // Cache object to store previous search results (key = search term, value = results)
    // This prevents making the same API call again
    const [cache, setCache] = useState({});


    // Function that fetches data from API
    const fetchData = async () => {
        // Check if we already have results for this input in cache
        if (cache[input]) {
            console.log("Cache Returned", input);
            setResults(cache[input]);   // Use cached data instead of API call
            return;                     // Exit early
        }

        // If not in cache, make actual API call
        console.log("API CALL", input);

        const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
        const json = await data.json();

        // Update results state with fetched recipes
        setResults(json?.recipes || []);   // Added fallback in case json.recipes is undefined

        // Save the results in cache for future use
        setCache((prev) => ({ ...prev, [input]: json?.recipes || [] }));
    };


    // This useEffect runs every time 'input' changes (debounce effect)
    useEffect(() => {
        // Set a timer to call fetchData after 300ms
        const timer = setTimeout(fetchData, 300);

        // Cleanup function: clears the previous timer when input changes again
        // This is what creates the "debounce" behavior
        return () => {
            clearTimeout(timer);
        };

    }, [input]);   // Dependency array: effect runs whenever input value changes


    return (
        <div className="container font-sans text-center">
            <h1>Auto Complete Search Bar</h1>

            <div className="m-auto p-4 self-center">
                <input 
                    // When user clicks on input (focus), show results dropdown
                    onFocus={() => setShowRes(!showRes)}
                    
                    // When user clicks away (blur), hide results dropdown
                    onBlur={() => setShowRes(!showRes)}
                    
                    type="text" 
                    className="w-[500px] w-2xs border-black border-1" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            {/* Show results dropdown only when showRes is true */}
            {showRes && (
                <div className="w-[500px] overflow-y-scroll min-h-36 max-h-96 m-auto border-b-black border-2 text-left">
                    {results.map((r) => (
                        <span 
                            className="block p-1 border-b-black border-1 hover:bg-amber-200" 
                            key={r.id}
                        >
                            {r.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;