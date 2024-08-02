import { Route, Routes } from "react-router-dom";

import { Statics } from "@/pages/statics";
import { Home } from "@/pages/home";
import { Socials } from "@/pages/socials";
import { Invites } from "@/pages/invites";
import { Tasks } from "@/pages/tasks";
import { Videos } from "@/pages/videos";
import { Splash } from "@/pages/splash";

export function RoutesProvider() {
  return (
    <Routes>
      <Route element={<Splash />} path="/" />
      <Route element={<Home />} path="/home" />
      <Route element={<Statics />} path="/static" />
      <Route element={<Socials />} path="/socials" />
      <Route element={<Tasks />} path="/tasks" />
      <Route element={<Videos />} path="/videos" />
      <Route element={<Invites />} path="/invites" />
    </Routes>
  )
}
