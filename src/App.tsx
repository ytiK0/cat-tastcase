import './App.css'
import Checkbox from "./components/Checkbox/Checkbox.tsx";
import Button from "./components/Button/Button.tsx";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import Image from "./components/Image/Image.tsx";
import {getCatImageUrl} from "./api/getCatImageUrl.ts";
// import Image from "./components/Image/Image.tsx";

function App() {
  const [isAutoRefreshOn, setIsAutoRefreshOn] = useState(false);
  const [catSrc, setCatSrc] = useState<string | null>(null);

  const setNewImage = () => {
    getCatImageUrl()
      .then((url) => setCatSrc(url));
  }

  useEffect(() => {
    setNewImage();
  }, []);

  useEffect(() => {
    if (isAutoRefreshOn) {
      const interval = setInterval(() => {
        setNewImage()
      }, 5000)

      return () => clearInterval(interval);
    }
  }, [isAutoRefreshOn]);

  const handelRefreshCheckboxChange = useCallback((ev: ChangeEvent) => {
    const target = ev.target as HTMLInputElement;

    setIsAutoRefreshOn(target.checked);
  }, []);

  const handelButtonClick = useCallback(() => {
    setNewImage();
  }, [])

  return (
    <>
      <div className={"checkbox-wrapper"}>
        <Checkbox id={"test1"} defaultChecked> Simple checkbox </Checkbox>
        <Checkbox id={"refresher"}
                  checked={isAutoRefreshOn}
                  onChange={handelRefreshCheckboxChange}
        >
          Auto refresh every 5 seconds
        </Checkbox>
      </div>
      <div className={"image-wrapper"}>
        <Button onClick={handelButtonClick}>Get Cat</Button>
        {
          catSrc ? <Image src={catSrc} alt={"image with cat"} /> : "Loading..."
        }
      </div>
    </>
  )
}

export default App
