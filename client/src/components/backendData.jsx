import { useEffect, useState } from "react"

export default function BackendData(){

    const [serverData, setServerData] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:5000/api/server-info")
        .then(res=>res.json())
        .then(data=>{
            setServerData(data)
        })
        .catch(error=>console.log("Error fetching server info:", error))
    }, []);

    if(!serverData){
        return <div className="data-loading">Loading Server Data...</div>
    }
    return (
        <div>
            <div className="current-stats">
                <div>
                    <div>Players</div>
                    <div className="player-stats">{serverData.players}</div>
                </div>

                <div>
                    <div>Ping</div>
                    <div className="player-stats">{serverData.ping}</div>
                </div>

                <div>
                    <div>Tickrate</div>
                    <div className="player-stats">{serverData.tickrate}</div>
                </div>

                
            </div>

            <div className="server-settings">
                <div>
                    <div>Settings</div>
                    {Object.entries(serverData.settings).map(([key, value])=>(
                        <div className="settings" key={key}>
                            <div>{key}</div>
                            <div>{value}</div>
                        </div>
                    ))}
                </div>

                <div>
                    <div>Advanced</div>
                    {Object.entries(serverData.advanced).map(([key, value])=>(
                        <div className="settings" key={key}>
                            <div>{key}</div>
                            <div>{value}</div>
                        </div>
                    ))}
                </div>

                <div>
                    <div>Rules</div>
                    {Object.entries(serverData.rules).map(([key, value])=>(
                        <div className="settings" key={key}>
                            <div>{key}</div>
                            <div>{value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}