import React, {useEffect} from 'react'
import './player.css'
import { load } from '@2gis/mapgl';
import Joystickbase from '../../images/joystick-base.png'
import Joystickblue from '../../images/joystick-blue.png'
import Joystickred from '../../images/joystick-red.png'


const player = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [38.935728, 47.20218],
                zoom: 17,
                key: 'efd269f4-30ee-45b6-87a7-221a0ed86863',
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
      <div className="statistic">
        <p className='titlestat'>Статистика</p>
        <p>Двигатель: OFF</p>
        <p>Высота: NONE</p>
        <p>Скорость: NONE</p>
        <p>Связь: NONE</p>
      </div>
        <div className="channel">
            <span className='channel'>{channel}</span>
            <MapWrapper />
        </div>
        
      <div className="signal">
        <span id='blink' className='status'>{signalstatus}</span>
      </div>
      
      <div className="joystickred">
        <img className='stick' src={Joystickbase} alt="" />
        <img id='redstick' src={Joystickred} alt="" />
      </div>
      <div className="joystickblue">
        <img className='stick' src={Joystickbase} alt="" />
        <img id='bluestick' src={Joystickblue} alt="" />
      </div>
    </div>
  )
}

export default player