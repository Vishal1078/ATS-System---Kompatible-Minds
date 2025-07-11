import React from "react";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};

const thStyle = {
  backgroundColor: "#f2f2f2",
  padding: "12px",
  border: "1px solid #ddd",
  textTransform: "uppercase",
  color: "#333",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

const rowHoverStyle = {
  cursor: "pointer",
};

const CandidateTable = ({ candidates = [] }) => {
  return (
    <div style={{ padding: "30px", background: "#f9f9f9", minHeight: "100vh" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    }}
  >
    <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>
      Candidates
    </h2>
    <a
      href="/add-candidate"
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 16px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      + Add Candidate
    </a>
  </div>

      <div style={{ overflowX: "auto", backgroundColor: "grey", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Job Title</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Notice</th>
              <th style={thStyle}>Recruiter</th>
              <th style={thStyle}>Source</th>
              <th style={thStyle}>Expected Salary</th>
            </tr>
          </thead>
          <tbody>
            {candidates.length === 0 ? (
              <tr>
                <td colSpan="10" style={{ ...tdStyle, textAlign: "center", fontStyle: "italic", color: "#888" }}>
                  No candidates found.
                </td>
              </tr>
            ) : (
              candidates.map((c) => (
                <tr key={c.id} style={rowHoverStyle}>
                  <td style={tdStyle}>{c.id}</td>
                  <td style={tdStyle}>{c.name}</td>
                  <td style={tdStyle}>{c.email}</td>
                  <td style={tdStyle}>{c.phone}</td>
                  <td style={tdStyle}>{c.jobTitle}</td>
                  <td style={tdStyle}>{c.status}</td>
                  <td style={tdStyle}>{c.noticePeriod}</td>
                  <td style={tdStyle}>{c.recruiter}</td>
                  <td style={tdStyle}>{c.source}</td>
                  <td style={tdStyle}>{c.expectedSalary}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;
