const rows = [{label:"name", key:"name"},{label:"phone number", key:"phone"}]
const columns = [{name:"Feyi",phone:"07033"},{name:"Abba",phone:"08000"}]

const Testtable = ({})=>{

    return(
        <div>
            <table>
                <thead>
                    {/* <tr>
                        <th>Name</th>
                        <th>phone number</th>
                    </tr> */}
                    <tr>
                        {rows.map((row,id)=>{
                            
                            return    <th key={id}>{row.label}</th>
                            
                        })}
                    </tr>
                   
                    
                </thead>
                <tbody>
                    {/* <tr>
                        <td>Feyi</td>
                        <td>07033</td>
                    </tr>
                    <tr>
                        <td>Abba</td>
                        <td>08000</td>
                    </tr> */}

                      {columns.map((column,idx)=>{

                        const keys = rows.map((key)=>key.key)
                        const cells = keys.map((cell,id)=>{
                            return <td key={id}>{column[cell]}</td>
                        })
                        return <tr key={idx}>
                            {cells}
                        </tr>
                      })}
                    
                    
                </tbody>
            </table>
        </div>
    )
}
export default Testtable