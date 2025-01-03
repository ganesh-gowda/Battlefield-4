
export default function BrowserBreadcrumb() {
    return (
        <div>
            <div className="previous-breadcrumb">
                <a href="#" className="breadcrumb-back">
                    <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg" alt="" />
                </a>
                <a href="#">multiplayer</a>
                <div>/</div>
                <a href="#">server Browser</a>
                <div>/</div>

            </div>
            
            <div className="current-breadcrumb">Server Info</div>
        </div>
    )
}