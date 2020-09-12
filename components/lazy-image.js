import PropTypes from "prop-types";

export function LazyImage({fileName, loaded}) {

    //TODO i would prefer this component doesn't handle by hitself to add the "image" prefix
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