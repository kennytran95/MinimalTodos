export default function PasswordErrorMessage() {
  return (
    <div className="error-container">
      <p>Your password should have the following...</p>
      <ul>
        <li>Be at least 4 characters long</li>
        <li>Is no longer than 16 characters</li>
      </ul>
    </div>
  );
}
