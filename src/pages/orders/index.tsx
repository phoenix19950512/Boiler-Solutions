import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthHelpers";
import { OrderModel } from "../../models/order";
import { countOrders, deleteOrder, getAllOrders } from "./_request";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Payment from "../../common/Loader/Main/checkoutForm";

export const StatusBadge: FC<{ status?: number }> = ({ status }) => {
  if (status === 2) {
    return (
      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
        Paid
      </p>
    )
  } else if (status === 1) {
    return (
      <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
        Unpaid
      </p>
    )
  } else if (status === 0) {
    return (
      <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
        Pending
      </p>
    )
  }
  return <>{status}</>
}

export const OrdersComponent: FC = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [orders, setOrders] = useState<OrderModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payAmount, setPayAmount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/auth/signin');
    }
  }, []);
  useEffect(() => {
    countOrders(currentUser?.email)
      .then(res => {
        const count = res.data;
        setTotal(count);
        setTotalPage(count ? Math.ceil(count / 50) : 1);
      })
      .catch(e => {
        console.error(e);
        toast.error(<><b>Failed to count orders.</b><br />{e.response?.data ? e.response.data.detail : 'Unkown error occured.'}</>);
      });
  }, [isChanged]);
  useEffect(() => {
    if (!isSuccess) return;
    setIsChanged(!isChanged);
    closeModal();
    setIsSuccess(false);
  }, [isSuccess]);
  useEffect(() => {
    getAllOrders(currentPage, 50, '')
      .then(res => setOrders(res.data))
      .catch(e => {
        console.error(e);
        toast.error(<><b>Failed to load orders.</b><br />{e.response?.data ? e.response.data.detail : 'Unkown error occured.'}</>);
      });
  }, [currentPage, isChanged]);

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setPayAmount(0);
  }
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPage - 1, currentPage + 2);
    pageNumbers.push(
      <button key='page1' type='button' className={`hover:shadow-lg hover:drop-shadow-lg cursor-pointer duration-200 px-3 py-2 rounded-md mx-1 ${currentPage === 1 ? 'bg-primary text-white' : 'bg-white'}`} onClick={() => setCurrentPage(1)}>1</button>
    );
    if (startPage > 2) {
      pageNumbers.push(<span key='start-elipsis'>...</span>);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button key={`page${i}`} type='button' className={`hover:shadow-lg hover:drop-shadow-lg cursor-pointer duration-200 px-3 py-2 rounded-md mx-1 ${currentPage === i ? 'bg-primary text-white' : 'bg-white'}`} onClick={() => setCurrentPage(i)}>{i}</button>
      );
    }
    if (endPage < totalPage - 1) {
      pageNumbers.push(<span key='end-elipsis'>...</span>);
    }
    if (totalPage > 1) {
      pageNumbers.push(
        <button key={`page${totalPage}`} type='button' className={`hover:shadow-lg hover:drop-shadow-lg cursor-pointer duration-200 px-3 py-2 rounded-md mx-1 ${currentPage === totalPage ? 'bg-primary text-white' : 'bg-white'}`} onClick={() => setCurrentPage(totalPage)}>{totalPage}</button>
      );
    }
    return pageNumbers;
  };
  const handleOrderDelete = (id: number) => {
    deleteOrder(id)
      .then(() => {
        toast.success('Successfully deleted.');
        setIsChanged(!isChanged);
      })
      .catch(e => {
        console.log(e);
        toast.error(<>Failed to delete order {id}.<br />{e.response?.data ? e.response.data.detail : 'Unkown error occured.'}</>);
      });
  }
  const handlePay = (amount: number) => {
    setPayAmount(amount * 100);
    openModal();
  }

  return <>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 min-h-[480px] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5 xl:pt-10">
      <div className='flex items-center my-3'>
        <button type='button' key={-1} className='cursor-pointer duration-200 bg-white px-3 py-2 rounded-md disabled:opacity-60 disabled:shadow-none disabled:drop-shadow-none disabled:cursor-not-allowed hover:shadow-lg hover:drop-shadow-lg' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {renderPageNumbers()}
        <button type='button' key="+1" className='cursor-pointer duration-200 bg-white px-3 py-2 rounded-md disabled:opacity-60 disabled:shadow-none disabled:drop-shadow-none disabled:cursor-not-allowed hover:shadow-lg hover:drop-shadow-lg' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>
          &gt;
        </button>
        <div className='align-content-center mx-10'>
          Total: {total}
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Order Number
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Ordered date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Content
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={`order${index}`} className="duration-300 hover:bg-bodydark1">
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <p className="text-black dark:text-white">{order.id}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{new Date(order.date).toLocaleDateString('af')}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  £{order.price}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {order.product}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <StatusBadge status={order.payment_status} />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-success" title="Pay Now" onClick={() => handlePay(order.price)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7.5h15m-15 0v9a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5zm12 3.75h3m-3 0a.75.75 0 100 1.5h3a.75.75 0 100-1.5"
                        />
                      </svg>
                    </button>
                    {/* <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button> */}
                    {/* <button className="hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        width="18"
                        height="18"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 2.487a2.625 2.625 0 013.713 3.713L7.214 19.56a4.125 4.125 0 01-1.591 1.015l-3.184 1.061a.75.75 0 01-.949-.95l1.061-3.183a4.125 4.125 0 011.015-1.592L16.862 2.487z"
                        />
                      </svg>
                    </button> */}
                    <button className="hover:text-danger" onClick={() => handleOrderDelete(order.id ?? -1)} title="Delete">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className="mb-4 text-xl font-bold">Payment Details</h2>
      <div className="mb-4">
        <Payment amount={payAmount} setIsSuccess={setIsSuccess} />
      </div>
      <button
        className="px-4 py-2 text-white bg-meta-1 rounded float-right hover:bg-meta-7"
        onClick={closeModal}
      >
        &times; Cancel
      </button>
    </Modal>
  </>
}