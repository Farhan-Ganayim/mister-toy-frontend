import React, { useState } from "react"
import GoogleMapReact from 'google-map-react'


const branches = [
    { town: 'Haifa', lat: 32.8, lng: 35 },
    { town: 'Kiryat Ata', lat: 32.8027, lng: 35.104 },
    { town: 'Atlit', lat: 32.6920, lng: 34.9392 }
]

const BranchMarker = ({ text }) => <div style={{ fontSize: '3em' }}> {text}</div >

export function GoogleMap() {

    const [center, setCenter] = useState({ lat: 32.8, lng: 35 })
    const [zoom, setZoom] = useState(11)

    function centerBranch(branch) {
        setCenter({ lat: branch.lat, lng: branch.lng })
        setZoom(13)
    }

    return (
        <section className="map-container">
            <h2>Branches</h2>
            <div className="Branches-buttons">
                {branches.map(branch => (
                    <button key={branch.town}
                        onClick={() => centerBranch(branch)}>
                        {branch.town}
                    </button>
                ))}
            </div>

            <div className="google-map" style={{ height: '60vh', width: '70%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCxu5ZZQN_aFcTLSTEdU_pohO9asLPwLIk" }}
                    center={center}
                    zoom={zoom}
                >
                    <BranchMarker
                        lat={32.8}
                        lng={35}
                        text="🏠"
                    />
                    <BranchMarker
                        lat={32.8027}
                        lng={35.104}
                        text="🏠"
                    />
                    <BranchMarker
                        lat={32.6920}
                        lng={34.9392}
                        text="🏠"
                    />
                </GoogleMapReact>
            </div>
        </section>
    )
}