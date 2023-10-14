import { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";
import Swal from "sweetalert2";

const MyToys = () => {
  const [data, setData] = useState([]);
  const { user, loader } = useAuth();
  useEffect(() => {
    if (!loader) {
      fetch(`http://localhost:5000/toys/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [loader, user, data]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  //   console.log(data);
  return (
    <div className="mx-auto pb-8 w-full min-h-screen max-w-7xl overflow-x-auto pt-32">
      <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
        {/* :TABLE HEAD */}
        <thead className="min-w-full bg-gray-100 text-left text-gray-700">
          <tr>
            {/* ::Name */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Name
            </th>
            {/* ::Job Title */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Price
            </th>
            {/* ::Email */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Email
            </th>

            {/* ::Actions */}
            <th
              className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Actions
            </th>
          </tr>
        </thead>

        {/* :TABLE BODY */}
        <tbody className="">
          {data.map((item, index) => (
            <tr
              key={item._id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } whitespace-nowrap`}
            >
              {/* ::User Name */}
              <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                {item.name}
              </td>
              {/* ::User Job Title */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">
                {item.price}
              </td>
              {/* ::User Email */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">
                {item.email}
              </td>

              {/* ::Action Buttons */}
              <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                {/* :::edit button */}
                <button
                  type="button"
                  className="text-sm text-gray-700 font-semibold hover:underline hover:text-black"
                >
                  Edit
                </button>
                {/* :::delete button */}
                <button
                  onClick={() => handleDelete(item._id)}
                  type="button"
                  className="text-sm text-red-500 font-semibold hover:text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
