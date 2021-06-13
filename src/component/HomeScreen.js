import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { app } from '../base'
import DisplayCard from './DisplayCard'
import Cooker from './HandleManCard/Cooker'
import Electrician from './HandleManCard/Electrician'
import Painter from './HandleManCard/Painter'
import Plumber from './HandleManCard/Plumber'
import Tailor from './HandleManCard/Tailor'

const HomeScreen = () => {

  const [electrician, setElectrician] =useState([])
  const [plumber, setPlumber] =useState([])
  const [cooker, setCooker] =useState([])
  const [painter, setPainter] =useState([])
  const [tailor, setTailor] =useState([])

  const [showElectrician, setShowElectrician] = useState(false)
  const [showCooker, setShowCooker] = useState(false)
  const [showPainter, setShowPainter] = useState(false)
  const [showPlumber, setShowPlumber] = useState(false)
  const [showTailor, setShowTailor] = useState(false)

  const handleElectrician = () => {
    setShowPainter(false)
    setShowTailor(false)
    setShowPlumber(false)
    setShowElectrician(true)
    setShowCooker(false)
  }

  const handleCooker = () => {
    setShowPainter(false)
    setShowTailor(false)
    setShowPlumber(false)
    setShowElectrician(false)
    setShowCooker(true)
  }

  const handlePlumber = () => {
    setShowPainter(false)
    setShowTailor(false)
    setShowPlumber(true)
    setShowElectrician(false)
    setShowCooker(false)
  }

  const handleTailor = () => {
    setShowPainter(false)
    setShowTailor(true)
    setShowPlumber(false)
    setShowElectrician(false)
    setShowCooker(false)
  }

  const handlePainter = () => {
    setShowPainter(true)
    setShowTailor(false)
    setShowPlumber(false)
    setShowElectrician(false)
    setShowCooker(false)
  }




  const getElectricianData = async() => {
    app.firestore().collection("electrician").onSnapshot(snapshot => {
        const r = []
        snapshot.forEach(doc => {
          r.push({...doc.data(), id: doc.id})
        })
        setElectrician(r)
    }) 
  }

  const getCookerData = async() => {
    app.firestore().collection("cooker").onSnapshot(snapshot => {
        const r = []
        snapshot.forEach(doc => {
          r.push({...doc.data(), id: doc.id})
        })
        setCooker(r)
    }) 
  }


  const getPainterData = async() => {
    app.firestore().collection("painter").onSnapshot(snapshot => {
        const r = []
        snapshot.forEach(doc => {
          r.push({...doc.data(), id: doc.id})
        })
        setPainter(r)
    }) 
  }


  const getPlumberData = async() => {
    app.firestore().collection("plumber").onSnapshot(snapshot => {
        const r = []
        snapshot.forEach(doc => {
          r.push({...doc.data(), id: doc.id})
        })
        setPlumber(r)
    }) 
  }


  const getTailorData = async() => {
    app.firestore().collection("tailor").onSnapshot(snapshot => {
        const r = []
        snapshot.forEach(doc => {
          r.push({...doc.data(), id: doc.id})
        })
        setTailor(r)
    }) 
  }


useEffect(()=>{
  getElectricianData()
  getPlumberData()
  getPainterData()
  getCookerData()
  getTailorData()
}, [])


console.log(painter)

  return (
    <div
   
    >
      <div>Handle Work</div>
      <br/>
      <br/>
      <br/>
      <div>
      <Button
      onClick={handleElectrician}
      >Electrician</Button>
      <Button
      onClick={handlePlumber}
      >Plumber</Button>
      <Button
      onClick={handleCooker}
      >Cooker</Button>
      <Button
      onClick={handlePainter}
      >Painter</Button>
      <Button
      onClick={handleTailor}
      >Tailor</Button>
      </div>
      <div
       style={{
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"center",
        width:"300px"
      }}
      >
       {
         showElectrician ? (
           <div> 
              {
              electrician.map(props => (
            <Electrician key={props.id} item={props}/> 
          ))
              }
          </div>
         ) : (
           showCooker ? (
            <div> 
            {
            cooker.map(props => (
          <Cooker key={props.id} item={props}/> 
        ))
            }
        </div>
           ) : (
             showPainter ? (
              <div> 
              {
              painter.map(props => (
            <Painter key={props.id} item={props}  /> 
          ))
              }
          </div>
             ) : (
               showPlumber ? (
                <div> 
                {
                plumber.map(props => (
              <Plumber key={props.id} item={props}/> 
            ))
                }
            </div>
               ) : (
                 showTailor ? (
                  <div> 
                  {
                  tailor.map(props => (
                <Tailor key={props.id} item={props}/> 
              ))
                  }
              </div>
                 ) : null
               )
             )
           )
         )
       }
      </div>
    </div>
  )
}

export default HomeScreen
