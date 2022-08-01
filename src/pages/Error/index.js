import './style.scss';

/**
 * @function 
 * Error (react component)
 * @description It's a React functional component that returns a header with a logo and a Navigate component.
 * @param props - An object containing the type property. Null means error 404.
 * @returns An Error message in the page, corresponding to the type property.
 */
export function Error(props){
  if(props.type==='unavailable'){
    return(
      <div className="containerError">
        <div className="codeError">Service indisponible</div>
        <div className="messageError">Merci de revenir ulterieurement</div>
        
      </div>
    );
  }
  return(
    <div className="containerError">
      <div className="codeError">ERROR 404</div>
      <div className="messageError">Oups! Une erreur s'est produite.</div>
      <div className="lienAccueil"> <a href="/accueil ">Revenir sur la page d'accueil</a></div>
    </div>
  );
}
