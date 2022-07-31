import './style.scss';

/**
 * @module 
 * Error (react component)
 *@description
 * It returns a div with the class name containerError.
 * @returns A div with a className of containerError.
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
