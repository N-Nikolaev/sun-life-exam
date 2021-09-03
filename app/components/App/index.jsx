import React, {useState} from 'react'

const App = () => {

    const [salesTaxPerState] = useState([
        {
            postal: 'MN',
            name: 'Minnesota',
            taxPercent: 6.78
        },
        {
            postal: 'CA',
            name: 'California',
            taxPercent: 6.5,
        },
        {
            postal: 'NY',
            name: 'New York',
            taxPercent: 4.00,

        },
        {
            postal: 'NM',
            name: 'New Mexico',
            taxPercent: 5.125,
            NM: 5.125,
        },
        {
            postal: 'TX',
            name: 'Texas',
            taxPercent: 6.25,
        },
    ])
    const [state, setState] = useState(
        salesTaxPerState[0].postal
    )
    const [amount, setAmount] = useState(0)
    const [taxAmount, setTaxAmount] = useState(0)

    const calculateTax = () => {
        if (state === '') return
        const stateTaxFilter = salesTaxPerState.filter(stateName => stateName.postal === state)[0].taxPercent
        const salesTaxPercentPerState = stateTaxFilter / 100
        const tax = (salesTaxPercentPerState * amount).toFixed(2)
        setTaxAmount(tax)
    }

    return (
        <div className="app">
            <h1>Sales Tax Calculator</h1>
            <p>
                Tax Amount: ${taxAmount} USD
            </p>
            <input 
                type="number" 
                step="0.001" 
                min="0"
                placeholder="Amount (USD)" 
                onChange={(e) => setAmount(e.target.value)}></input>
            <select onChange={(e) => setState(e.target.value)}>
                { salesTaxPerState.map((salesTax, idx) => 
                    <option value={salesTax.postal} key={idx}>({salesTax.postal}) {salesTax.name}</option>   
                )}
            </select>
            <button onClick={() => calculateTax()}>Calculate Tax</button>
            
        </div>
    )
}

export default App
