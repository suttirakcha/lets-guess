import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Airline(){
  const words = ["Plane","Aircraft","Aeroplane","Piloting","Pilot","Passenger","Customs","Airport","Flight attendant","Cabin crew","Emergency","Arrival","Boarding pass","Board","Bulkhead","Carry-on","Cockpit","Jet lag","Jet engine","Flight","Check-out","Baggage","Gate","Oxygen Mask","Steward","Aisle","Assistance","Captain","Co-pilot","Ticket","E-ticket","First class","Business class","Economy class","Domestic","International","Land","Loading","Life jacket","Passport","Visa","Turbulence","Aeroplane","Emergency exit","Stopover","Layover","Booking","Compartment","Seatbelt","Tower","Traffic controller","Aviation","Carousel","Security","Landing","Baggage claim","Red-eye","Aileron","Elevation","Engine","Knot","Propeller","Radar","Runway","Stall","Streamline","Tail","Take-off","Velocity","Connection","Departure","Flight deck","Luggage","Lavatory","Call light","Carrier","Check-in","Connecting flight","Direct flight","Hangar","Hybrid airline","Inbound","Outbound"];
  return (<Questions answers={words} category="Words in Airline" redirect="/words-in-airline"/>)
}