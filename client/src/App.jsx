import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetails,
  UploadJob,
  UserProfile,
} from "./pages";
import { Navbar, Footer } from "./components";
import { useSelector } from "react-redux";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(user);
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/user-auth" state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="/find-jobs" />}
            replace={true}
          />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/company-profile/:id" element={<CompanyProfile />} />
          <Route path="/upload-job" element={<UploadJob />} />
        </Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
