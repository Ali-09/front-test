import { useContext, useState } from 'react';
import OrdersContext from 'context/orders/OrdersContext';
import Table from 'components/orders/Table';
import DialogGeneral from 'components/DialogGeneral'
import FormOrder from 'components/orders/FormOrder';
import Payment from 'components/orders/Payment'
import Loading from 'components/Loading';
import { PlusIcon, CashIcon } from '@heroicons/react/solid'

const OrdersList = () => {
    
    const { orders_list, loading_orders_list, addProduct } = useContext(OrdersContext)
    const [add, setAdd] = useState(false)
    const [payment, setPayment] = useState(false)
    const [number, setNumber] = useState(0)
    const [data, setData] = useState({
        sku:'',
        name:'',
        price:'',
        quantity:''
    })
    
    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const save = () => {
        addProduct({number:number,item:data})
        clear()
    } 

    const clear = () => {
        setData({
            sku:'',
            name:'',
            price:'',
            quantity:''
        })
        setNumber(0)
        setAdd(false)
    }

    return (
        <div className="content-list">
            {
                !loading_orders_list 
                ?
                    orders_list.map((order,k)=>(
                        <div className="order" key={k}>
                            <div className="order-title">
                                <p>{`# ${order.number}`}</p>
                                <div className="order-actions">
                                    <button className="button-float-add bg-gradient-to-r from-green-500 to-green-400" onClick={()=>{setAdd(true); setNumber(order.number)}}><PlusIcon className="h-5 w-5 text-white"/></button>
                                    <button className="button-float-add bg-gradient-to-r from-yellow-500 to-yellow-400" onClick={()=>{setPayment(true)}}><CashIcon className="h-5 w-5 text-white"/></button>
                                </div>
                            </div>
                            { order.items && <Table products={order.items}/>}
                        </div>
                    ))
                :
                <Loading/>
            }
            <DialogGeneral open={add} closeModal={clear}>
                <FormOrder data={data} handleData={handleData} save={save}/>
            </DialogGeneral>

            <DialogGeneral open={payment} closeModal={()=>setPayment(false)}>
                <Payment close={()=>setPayment(false)}/>
            </DialogGeneral>
        </div>

    );
};

export default OrdersList;
