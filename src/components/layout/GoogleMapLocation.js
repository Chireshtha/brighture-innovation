import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'

const GoogleMapLocation = () => {
    const containerStyle = {
        width: "230px",
        height: "150px",
        marginBottom: "10px"
    }

    return (
        <div style={containerStyle}>
            <MapContainer style={containerStyle} center={[12.9716, 77.5946]} zoom={14}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[12.9716, 77.5946]}>
                    <Popup>My Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default GoogleMapLocation
