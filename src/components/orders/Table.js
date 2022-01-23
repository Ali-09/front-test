const Table = ({products}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th className="font-light text-sm uppercase">SKU</th>
                    <th className="font-light text-sm uppercase">Name</th>
                    <th className="font-light text-sm uppercase">Quantity</th>
                    <th className="font-light text-sm uppercase">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, k) => (
                        <tr key={k} className="odd:bg-slate-200 even:bg-slate-100">
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Table;
