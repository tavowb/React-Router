import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loading from "../components/Loading";

import Navbar from "../components/Navbar";

const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route end path="/men" element={<MenScreen />} />
          <Route end path="/women" element={<WomenScreen />} />
          <Route end path="/search" element={<SearchScreen />} />
          <Route end path="/character/:id" element={<CharacterScreen />} />

          <Route path="*" element={<Navigate to="/men" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
