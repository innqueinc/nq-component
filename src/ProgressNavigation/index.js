function ProgressNavigation() {
    return (
        <div className="position-relative m-3">
            <div className="progress" style={{"height": "2px"}}>
                <div className="progress-bar bg-dark" role="progressbar" style={{"width": "50%"}}
                     aria-valuenow="50" aria-valuemin="0"
                     aria-valuemax="100">
                </div>
            </div>
            <span className="badge bg-dark position-absolute top-0 translate-middle">1</span>
            <span className="badge bg-dark position-absolute top-0 translate-middle start-50">2</span>
            <span className="badge bg-white text-dark position-absolute top-0 translate-middle start-100">3</span>
        </div>
    )
}

export default ProgressNavigation;
