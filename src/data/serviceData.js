import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';

const iconStyle = {
  fontSize: 50 
}

const serviceData = [
  {
    title: "Idea",
    icon: <TipsAndUpdatesIcon sx={iconStyle} />,
    message: "Nos reunimos para saber mas sobre la idea y los alcances del proyecto, después trabajare en conjunto para crear un plan de acción y una propuesta para su proyecto."
  },
  {
    title: "Diseño",
    icon: <DesignServicesIcon sx={iconStyle}/>,
    message: "Comenzamos diseñando una maqueta o prototipo de tu sitio web, una vez tengamos una maqueta inicial empieza el proceso de adaptación y perfección."
  },
  {
    title: "Desarrollo",
    icon: <CodeIcon sx={iconStyle} />,
    message: "Desarrollo sitios web siguiendo las mejores prácticas de desarrollo, diseño y SEO, para que sea adaptable, rápido y escalable."
  }
]
export default serviceData;

  