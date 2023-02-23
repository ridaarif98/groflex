function ChangePassword() {
  return <h1>Change Password</h1>;
}

function DeleteAccount() {
  return <h1> Delete Account</h1>;
}

function NotificationsPreference() {
  return (
    <div>
      <h1>Your Notifications</h1>
      <h2>Sender Email Preferences</h2>
    </div>
  );
}

function AccountPreference() {
  return (
    <div>
      <h1>AccountPreference </h1>
      <ChangePassword />
      <DeleteAccount />
      <NotificationsPreference />
    </div>
  );
}

export default AccountPreference;
