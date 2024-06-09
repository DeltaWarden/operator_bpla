import React, {useEffect} from 'react'
import './player.css'
import { load } from '@2gis/mapgl';


const player = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [38.935728, 47.20218],
                zoom: 17,
                key: '50654a4a-e1d9-407b-b04d-54a8f58d9f10',
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    
    const MapWrapper = React.memo(
        () => {
            return <div id="map-container" style={{ width: '35vh', height: '35vh' }}></div>;
        },
        () => true,
    );
    
    const signalstatus = 'НЕТ СИГНАЛА';
    const channel = 'CH 1';
  return (
    <div className="base">
        <div className="channel">
            <span className='channel'>{channel}</span>
            <MapWrapper />
        </div>
      <div className="signal">
        <span id='blink' className='status'>{signalstatus}</span>
      </div>
      <div className="statistic">
        <ul>
          <li><div className="engine-status">
            <span>Двигатель</span><div className="led red"></div>
          </div></li>
          <li>1111111</li>
          <li>11111111</li>
          <li>11111111</li>
          <li>111111111</li>
        </ul>
      </div>
    </div>
  )
}

export default player