
export const ApiEndpoints = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    const keys = Object.keys(data[0]);

    return (
        <div>
        <table>
            <thead>
                <tr>
                    {keys.map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {keys.map((key) => (
                            <td key={key}>{item[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

 
