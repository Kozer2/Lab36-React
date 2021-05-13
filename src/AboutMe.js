import image from './assets/image.jpg'
export default function AboutMe(){
  return (
    
    <div className="AboutMeBody">
    <body>
      <h1>About me</h1>
      <img src={image} height={200} width={200} alt="Profile "></img>
    <p>My name is Ben Hemann and this is my first website built with React</p>
    <div className="aboutMeLinks">
      <h5>Important Links:</h5>
      <ol>
        <li><a href="https://github.com/Kozer2">Github</a></li>
        <li><a href="https://www.linkedin.com/in/ben-hemann-5122aba7/">LinkedIn</a></li>
      </ol>
      <h6>Project Links:</h6>
      <ul>
      <li><a href="https://ecommerce-lab.azurewebsites.net">Ecommerce Application</a></li>
      <li><a href="https://digitalarthub.azurewebsites.net">Digital ArtHub Project</a></li>
      </ul>
    </div>
    </body>
    </div>
  )
}

