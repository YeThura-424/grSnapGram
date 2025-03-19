import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetail, Saved } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/saved" element={<Saved /> } />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
