import React from "react";
import "./CalenderModal.css";
import cancel from "../../svgs/Cancel.svg";
import next from "../../svgs/next.svg";

const CalenderModal = ({ show, onClose, onNext }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Reschedule a Tour</h2>
          <button className="close-button" onClick={onClose}>
           Close <img className='backk-btn' src={cancel} alt="can" />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-head">
            <h3 className="big-heading">Step 1/3:</h3>
            <p id="big-para"> Pick a new available date</p>
          </div>
          <div className="calendar">
            <div className="calen-head">
            <h3 className="big-head">January 2021</h3>
            <img onClick={onNext} className='can-btn' src={next} alt="nex" />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                  <th>Su</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>16</td>
                  <td onClick={onNext}>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                </tr>
                {/* Add rows for more dates */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderModal;
