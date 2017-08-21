import React, {Component} from 'react';
class About extends Component {
    render() {
        document.title = "About Digital Home";
        return (
            <div className="container">
            <h4 className='ht-indent'>About Us</h4>
                <div className="row">  
                <div className="col s12 m12 l12 ">
                <div className="divider"></div>   

                <div className="row">
                <div className="col s12 m9 l8 ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris quis arcu bibendum sollicitudin. In pellentesque lacus eu odio faucibus, a vulputate elit dignissim. Quisque sed posuere nibh. Nunc sit amet hendrerit urna. Nulla iaculis rutrum nisl sit amet cursus. Maecenas varius, tellus non sagittis sagittis, dui purus semper quam, sed aliquam tellus elit vitae velit. Aliquam erat volutpat.</p>

                    <p>Sed accumsan mauris enim, at cursus lectus molestie tempus. In accumsan hendrerit nisl eu ornare. Etiam ornare eget arcu eu fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu augue, ultrices eget eros eget, sagittis facilisis quam. Quisque sollicitudin placerat urna sit amet efficitur. Pellentesque sed bibendum ipsum. Nam eget tellus purus. Phasellus in feugiat nisl. Sed vitae sem nec nunc dignissim elementum. Praesent tortor arcu, tincidunt sed leo et, laoreet sodales nibh. Donec viverra risus non mi vestibulum euismod. In convallis varius sem, non finibus urna.</p>

                    <p>Aenean id efficitur nunc. Sed finibus arcu nibh, at euismod nulla pretium vitae. Vestibulum neque nibh, auctor pulvinar massa sed, condimentum convallis augue. Nulla sit amet enim luctus, molestie massa tempus, elementum nisi. Sed sit amet semper dui. Proin at lacus sodales, mollis mauris et, ullamcorper risus. Suspendisse ac nulla sagittis, cursus dui nec, sollicitudin lorem. Nulla viverra quam in vestibulum congue. Donec malesuada nunc vitae tristique aliquet. Vivamus euismod neque vitae pellentesque pellentesque. Cras tempus pretium eros, in tempus arcu feugiat eget. Praesent non sollicitudin purus. Mauris interdum quis nisl cursus porttitor. Etiam eget blandit mi, elementum efficitur nunc. Nullam vulputate tellus ac convallis sollicitudin. Curabitur enim nisl, consectetur eu sapien vel, vehicula tincidunt lacus.</p>
                    <p>Aenean id efficitur nunc. Sed finibus arcu nibh, at euismod nulla pretium vitae. Vestibulum neque nibh, auctor pulvinar massa sed, condimentum convallis augue. Nulla sit amet enim luctus, molestie massa tempus, elementum nisi. Sed sit amet semper dui. Proin at lacus sodales, mollis mauris et, ullamcorper risus. Suspendisse ac nulla sagittis, cursus dui nec, sollicitudin lorem. Nulla viverra quam in vestibulum congue. Donec malesuada nunc vitae tristique aliquet. Vivamus euismod neque vitae pellentesque pellentesque. Cras tempus pretium eros, in tempus arcu feugiat eget. Praesent non sollicitudin purus. Mauris interdum quis nisl cursus porttitor. Etiam eget blandit mi, elementum efficitur nunc. Nullam vulputate tellus ac convallis sollicitudin. Curabitur enim nisl, consectetur eu sapien vel, vehicula tincidunt lacus.</p>
                </div>
                <div className="col m3 l4 right hide-on-med-and-down center-align">
                    <h5>Specializing in</h5>
                    <img className='responsive-img aboutImage' src='/images/cms.jpg' />
                    <p>Custom Development</p>
                    <img className='responsive-img aboutImage' src='/images/wp.png' />
                    <p>WordPress</p>
                    <img className='responsive-img aboutImage' src='/images/joomla.png' />
                    <p>Joomla</p>

                </div>

                </div>
                </div>   
                </div>
            </div>
         )
    }
}

export default About;