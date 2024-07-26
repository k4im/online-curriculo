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
            lerp: 1250,
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
