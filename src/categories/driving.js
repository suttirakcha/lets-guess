import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Driving(){
  const words = ["Motorway","Road","Street","Car","Bus","Lorry","Truck","Traffic","Traffic jam","Traffic lights","Bus stop","Van","Driving licence","Speed","Patrol","Petrol station","Insurance","Accident","Fuel","Hill","Tyre","Engine","Tollway","Bridge","Driver","Passenger","Taxi","Zebra crossing","Lane","Two-way traffic","U-turn","Parking lot","Motorbike","Bicycle","Map","Wheel","Steer","Ride","Drive","Straight","Left turn","Destination","Detour","Route","Speed limit","Brake","Seatbelt","Accelerate","Curve","Construction","Driver education","Emission","Exit","Ramp","Pavement","Global Positioning System (GPS)","Go","Hybrid","Intersection","Oil","Safety","Ticket","Toll","Vehicle","Warning","Yield","Kilometre","Metre","Miles","Miles per hour (mph)","Kilometre per hour (kph)","Red light","Yellow light","Green light","Left turn","Right turn"];
  return (<Questions answers={words} category="Driving" redirect="/driving"/>)
}