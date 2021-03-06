
const Payment = ({close}) => {
  return (
    <>
        <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
            Successful payment
        </h3>

        <div className="mt-4 text-center">
            <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={close}
            >
            OK
            </button>
        </div>
    </>
  );
};

export default Payment;
