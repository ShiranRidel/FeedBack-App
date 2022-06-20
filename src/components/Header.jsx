import PropTypes from 'prop-types';

function Header({text, bgColor,textColer}) {
    const headerStyles={
        backgroundColor: bgColor,
        color: textColer,
    }
  return (
    <header style={headerStyles}>
     <div className="container">
         <h2>{text}</h2>
     </div>
    </header>
  )
}

Header.defaultProps= {
    text:'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColer: '#ff6a95',

}
Header.protoType = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColer: PropTypes.string,
}

export default Header