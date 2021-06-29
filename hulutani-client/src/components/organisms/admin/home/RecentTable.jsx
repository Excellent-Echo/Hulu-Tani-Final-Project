import React,{ useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import adminShowTransactionAction from "../../../../redux/admin/transaction/show/adminShowTransactionAction";
import NumberFormat from "react-number-format";

const ths = [
    { name: "ID" },
    { name: "Kode Transaksi" },
    { name: "Jumlah Pembayaran" },
    { name: "Status" },
  ],
  RecentTable = () => {
    const recentsData = useSelector(
      (state) => state.adminShowTransactions.recents
    );
    // const [recentsData, setRecentsData] = useState([])

    const dispatch = useDispatch();
    useEffect(() => {
      // dispatch(adminShowTransactionAction.getTransactions());
      // for(let x=0; x<10;x++){
      //   recentsData.push(adminTransactionsData[x])
      //     // setRecentsData(...recentsData,adminTransactionsData[x])
      //     //console.log(recentsData)
      // }
    }, []);



    return (
      <div className="table-responsive">
        <table className="table table-borderless table-hover">
          <thead className="table-light">
            <tr>
              {ths.map((th) => (
                <th className="text-center">{th.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {recentsData.map((data,index)=>{
              return (
                <tr>
                  <td className="text-center">{index+1}</td>
                  <td className="text-center">{data.kode_transaksi}</td>
                  <td className="text-center"><NumberFormat value={data.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/></td>
                  <td className="text-center">{data.status}</td>
              </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    );
  };

export default RecentTable;