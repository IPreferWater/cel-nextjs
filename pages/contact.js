import { LazyImage} from '@components/lazy-image'


export default  class Contact extends React.Component {

    state = {imgLoaded: false};

    componentDidMount () {
        setTimeout(() => {  this.setState({imgLoaded: true}); }, 2000);
        //this.setState({imgLoaded: true})
      }
    render(){
    return <div className="text-center">
        <h1>Contact</h1>
            <LazyImage fileName={'about_photo.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
        <p>This is where you can contact me</p>
        <a className="bg-green-500 block mt-8 p-8" href="mailto:matteo@manzinello.dev">envoyer email</a>
    </div>
  }
}
  
