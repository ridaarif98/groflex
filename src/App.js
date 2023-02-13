import AdminNotifications from "./AdminNotifications";
import Header  from "./Header";

function App() {
  return (
    <div className="page-content-wrapper">
      <div className="page-content is-relative">
        <Header />
        <div className="page-content-inner">
        <AdminNotifications />
        </div>
      </div>

    </div>
  );
}

export default App;
