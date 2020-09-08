import PropTypes from "prop-types";

export function LazyImage({fileName, loaded}) {

    function getLqipFileName(){
        return `${fileName}?lqip`
    }

    return (
        <div className="relative">
        <img className={`absolute blur ${loaded ? "invisible" : "visible"}`} width="100%" height="100%" src={require(`images/${fileName}?lqip`)} />
        <img className={`${loaded ? "visible" : "invisible"}`} src={require(`images/${fileName}`)} />
        </div>
    )
}

LazyImage.propTypes = {
    fileName: PropTypes.string,
    loaded: PropTypes.bool,
};