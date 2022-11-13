export default function EmailErrorMessage() {
  return (
    <div className="error-container">
      <p>Your email should have the following...</p>
      <ul>
        <li>Be a valid existing email address</li>
        <li>Contain the @ symbol</li>
        <li>Contain a domain</li>
        <li>Be less than 50 characters long</li>
      </ul>
    </div>
  );
}
