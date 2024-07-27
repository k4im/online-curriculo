import { useEffect } from "react";
import { MainApp } from "./application/layout/main/main"
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    (    async () => {
          new LocomotiveScroll({
            //@ts-ignore
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            lerp: 150000,
            repeat: true,
          });
        })()
      })
  return (
    <>
    <main data-scroll-container>
      <MainApp></MainApp>
    </main>
    </>
  )
}

export default App
