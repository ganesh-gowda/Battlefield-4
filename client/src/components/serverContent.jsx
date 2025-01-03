
import BackendData from "./backendData";
import ServerMaps from "./serverMaps";
export default function ServerContent(){
    const serverName = "! RC3-BASEMAPS";
    
    return (
        <div className="server-content-container">
            <div className="bottom-gradient-bar"></div>
            <div className="server-info">
                <div className="server-name">{serverName}</div>
                <div class="server-details">
                    <img alt="" src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg" />
                    <div class="server__mode">conquest large - Lancang Dam - Custom - 60 hz</div>
                </div>
                
                <div class="server-desc">Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d</div>
            </div>

            <div className="server-buttons">
                <div>Join</div>
                <div>Spectate</div>
                <div>Join as commander</div>
                <div>
                    <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg" alt="" />
                    <div>13672</div>
                </div>
            </div>

            <BackendData />
            <ServerMaps />
        </div>
    )
}
