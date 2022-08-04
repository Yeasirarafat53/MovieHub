import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './booking.css';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [info, setInfo] = useContext(UserContext);
  const navigate = useNavigate();
  console.log(info);
  const submit = () => {
    alert('booking successfully');

    navigate('/');
  };
  return (
    <div class="form-box">
      <h1>Book Your Sit</h1>

      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            class="form-control"
            id="name"
            type="text"
            name="Name"
            value={info.name}
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" id="email" type="email" name="Email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" name="Message"></textarea>
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary mt-3" type="button" onClick={submit}>
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
