import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { HomePage } from "./Pages/HomePage";
import { UsersPage } from "./Pages/UsersPage";
import { UserDetailsPage } from "./Pages/UserDetailsPage";
import { AddUserPage } from "./Pages/AddUserPage";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="users/add" element={<AddUserPage />} />
      </Route>
   </Routes>
  );
};
