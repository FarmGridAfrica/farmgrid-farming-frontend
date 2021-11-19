import { useEffect, useState, useRef } from "react";
import { AdminNav } from "../../../Components/navbar";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

const Notification = () => {
  const history = useHistory();

  const socket = useRef();

  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    socket.current = io("http://localhost:5000");
  }, []);

  useEffect(() => {
    socket.current.on("Withdrawal_request", (farm) => {
      setWithdrawals([...withdrawals, farm]);
    });
  }, [socket, withdrawals]);

  return (
    <div>
      <AdminNav />
      <section className="container">
        <h1 className="invest-heading">Notifications</h1>

        <div className="width-250">
          {withdrawals.map((_) => (
            <div className="card mb-1 p-1">
              Withdrawal Request: <Link to={`/admin/farms/${_._id}`}>View</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Notification;
