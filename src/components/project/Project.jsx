import "./project.css"
export default function Project({projData: {img, imgAlt, title, text, github, deployment}}) {
    return (
        <div id="Card" className="card d-inline-flex m-2 shadow-lg text-bg-dark col-sm-12 col-lg-5">
            <img src={img} className="card-img-top p-2 img-fluid img-thumbnail" alt={imgAlt} />
            <div className="card-body d-flex flex-column align-items-center p-2">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-center">{text}</p>
                <a href={github} id="COLOR" className="btn btn-primary m-2">Github</a>
                {deployment?<a href={deployment} id="COLOR" className="btn btn-primary m-2">Deployment</a>: null}
            </div>
        </div>
    )
}