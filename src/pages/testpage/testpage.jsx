import React, { useEffect, useRef, useState } from 'react'
import "./test.css"

const getRandomColor = () => {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

function map(num, inInterval, outInterval) {
  const inLen = inInterval[1] - inInterval[0];
  const outLen = outInterval[1] - outInterval[0];
  const percent = ((num-inInterval[0]) / inLen) * 100;
  const outNum = outLen * percent / 100 + outInterval[0];
  
  return outNum;
}

const testpage = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setwidth] = useState(window.innerWidth);
  const [avgTime, setAvgTime] = useState();
  const [testPassed, setTestPassed] = useState(false);
  const [testFailed, setTestFailed] = useState(false);
    const shape = useRef()
    const testsInTotal = 10;
    let passedTests = 0;
    const times = new Array();
    let start;
    let end;

    useEffect(() => {
      console.log('загрузка страницы');
      appearAfterDelay()
      const updateHeight = () => setHeight(window.innerHeight);
      const updateWidth = () => setwidth(window.innerWidth);
      window.addEventListener('resize', updateHeight);
      window.addEventListener('resize', updateWidth);
      return () => {
        window.removeEventListener('resize', updateHeight);
        window.removeEventListener('resize', updateWidth);
      }
    }, []);

    const appearAfterDelay = () => {
      console.log('показать через время');
      setTimeout(makeShapeAppear, Math.random() * 2000);
    }
    

    const handelClick = (e) => {
      console.log('клик');
      shape.current.style.display = "none";
      end = new Date().getTime();
      times.push((end - start) / 1000)
      passedTests++;
      if (passedTests === testsInTotal) {
        let avgTime = Math.round(getAverage(times)*1000)
        setAvgTime(avgTime);
        console.log(avgTime);
        if (200 <= avgTime && avgTime <= 600) {
          setTestPassed(true);
          console.log('+');
        }
        else {
          setTestFailed(true);
          console.log('-');
        }
      }
      else {
        appearAfterDelay();
      }
    }

    const makeShapeAppear = () =>  {
      console.log('сделать видимым');
      var shapeWidth = (Math.random() * 150) + 100;
      const top = map(Math.random(), [0, 1], [0, height-shapeWidth]);
      const left = map(Math.random(), [0, 1], [0, width-shapeWidth]);
        if (Math.random() > 0.5) {
            shape.current.style.borderRadius = "50%";
        }
        else {
            shape.current.style.borderRadius = "0";
        }
        shape.current.style.backgroundColor = getRandomColor();
        shape.current.style.width = shapeWidth + "px";
        shape.current.style.height = shapeWidth + "px";
        shape.current.style.top = top + "px";
        shape.current.style.left = left + "px";
        shape.current.style.display = "block";
        start = new Date().getTime();
    }

    return (
      <>
        <div className="card">
            <h5 className="card-header">Тест реакции пилота</h5>
            {testPassed && `Среднее время: ${avgTime}ms` }
            {testPassed && 
              <form action="/main" target="_blank">
                <button>Приступить</button>
              </form>
            }
            {testFailed && <h5>Вы не прошли тест, у вас ещё 2 попытки</h5>}
        </div>
        <div id="shape" ref={shape} onClick={handelClick}></div>
      </>
    )
}
export default testpage;