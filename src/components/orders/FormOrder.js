const FormOrder = ({data, handleData, save}) => {
  return (
      <div className="w-full">
        <h3 className="mb-4 text-lg font-medium leading-6 text-gray-900">
          New product
        </h3>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">SKU</span>
          <input type="text" className="peer" onChange={handleData} value={data.sku} name="sku" required/>
          <p className="peer-invalid:visible text-error">
            Is required SKU value.
          </p>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Name</span>
          <input type="text" className="peer" onChange={handleData} value={data.name} name="name" required/>
          <p className="peer-invalid:visible text-error">
            Is required name value.
          </p>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Quantity</span>
          <input type="number" className="peer" onChange={handleData} value={data.quantity} name="quantity" required/>
          <p className="peer-invalid:visible text-error">
            Is required quantity value.
          </p>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Price</span>
          <input type="number" className="peer" onChange={handleData} value={data.price} name="price" required/>
          <p className="peer-invalid:visible text-error">
            Is required price value.
          </p>
        </label>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="button-add"
            disabled={!data.sku || !data.name || !data.quantity || !data.price}
            onClick={save}

          >
            save
          </button>
        </div>
      </div>
  );
};

export default FormOrder;
