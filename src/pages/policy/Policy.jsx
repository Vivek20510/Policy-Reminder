import Sidebar from "../../components/sidebar/Sidebar";
import "./policy.css"

export default function Policy() {
  return (
    <div className="policy">
      <div className="policyWrapper">
        <div className="policyTitle">
          <span className="policyTitleUpdate">Upload Your Policy Info.
          </span>
          <span className="policyTitleDelete">Delete Policy</span>
        </div>
        <form className="policyForm">
          <label>Policy Photo</label>
          <div className="policyPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="policyPPIcon fa-solid fa-cloud-arrow-up"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="policyPPInput"
            />
          </div>
          <label>Insurance Type</label>
          <input type="text" placeholder="Life Insurance" name="Policy Type" />
          <label>Policy Holder</label>
          <input type="text" placeholder="Vivek" name="Policy Holder" />
          <label>Policy Number</label>
          <input type="Number" placeholder="0827201202" name="Number" />
          <label>Nominee</label>
          <input type="text" placeholder="Raj Vishvkarma" name="Nominee" />
          <label>Company Name</label>
          <input type="text" placeholder="Vivek" name="name" />
          <label>Duration (Years)</label>
          <input type="text" placeholder="10 Years" years="name" />
          <button className="policySubmitButton" type="submit">
            Upload
          </button>
        </form>
      </div>
      <Sidebar/>
    </div>
  );
}